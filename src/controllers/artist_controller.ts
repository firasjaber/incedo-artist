import axios from 'axios';
import { Response, Request } from 'express';
import { BASE_URL, LASTFM_API_KEY } from '../config';
import { IArtistController } from '../interfaces/i_artist_controller';
import { IRawArtist } from '../interfaces/i_raw_artist';
import { ArtistQueryParams } from '../models/Artist';
import { mapToCSV, randomArtists, writeFile } from './../helpers';

export default class ArtistController implements IArtistController {
  async getArtistsByName(
    req: Request<any, any, any, ArtistQueryParams>,
    res: Response
  ) {
    try {
      const { name, filename } = req.query;
      if (!name) {
        return res
          .status(400)
          .json({ success: false, error: 'missing param : name' });
      }
      if (!filename) {
        return res
          .status(400)
          .json({ success: false, error: 'missing param : filename' });
      }

      let URL = BASE_URL + `&artist=${name}`;
      const { data } = await axios.get<IRawArtist>(URL);
      let artists = data.results.artistmatches.artist;
      if (artists.length === 0) {
        artists = await randomArtists();
      } else {
        const csvData = artists.map((artist) => mapToCSV(artist));
        let fileWritten = await writeFile(filename, csvData);
        if (!fileWritten)
          return res.status(400).json({
            success: false,
            message: 'error occured while saving the file',
          });
      }

      return res.status(200).json({ success: true, data: artists });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: 'internal error' });
    }
  }
}
