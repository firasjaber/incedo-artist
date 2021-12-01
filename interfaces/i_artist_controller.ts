import { Response, Request } from 'express';

export interface IArtistController {
  /**
   * Get an array of all artists that match the name.
   * @route **GET** - /api/artists?name=artist_name&format="csv | json"
   * @access **Public**
   */
  getArtistsByName(req: Request, res: Response): void;
}
