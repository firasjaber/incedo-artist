import { Artist } from '../models/Artist';
import { Response, Request } from 'express';
export interface IArtistController {
  getArtistsByName(req: Request, res: Response): void;
}
