import { Response, Request } from 'express';
import { IArtistController } from '../interfaces/i_artist_controller';

export default class ArtistController implements IArtistController {
  async getArtistsByName(req: Request, res: Response) {
    try {
      res.status(200).json({ message: 'test' });
    } catch (error) {
      res.status(500).json({ msg: 'errr' });
    }
  }
}
