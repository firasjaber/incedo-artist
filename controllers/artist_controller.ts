import axios from 'axios';
import { Response, Request } from 'express';
import { IArtistController } from '../interfaces/i_artist_controller';
import { ArtistQueryParams } from '../models/Artist';

export default class ArtistController implements IArtistController {
  async getArtistsByName(req: Request<any, any, any, ArtistQueryParams>, res: Response) {
    try {
      const { name, filename } = req.query;
      if (!name) {
        return res
          .status(401)
          .json({ success: 'false', error: 'missing params : name' });
      }

      let URL = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${name}&api_key=8eab9cd2c818d7833494ff5242f70141&format=json`;
      const data: any = await axios.get(URL);
      
      if (filename) {
        // TODO: Write to CSV
        console.log("Provided filename:", filename)
      }

      return res
        .status(200)
        .json({ message: 'success', data: data.data?.results?.artistmatches });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'errr' });
    }
  }
}
