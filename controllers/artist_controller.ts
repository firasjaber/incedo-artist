import { Response, Request } from 'express';

export default class ArtistController implements ArtistController {
  async getArtistsByName(req: Request, res: Response) {
    try {
      res.status(200).json({ message: 'test' });
    } catch (error) {
      res.status(500).json({ msg: 'errr' });
    }
  }
}
