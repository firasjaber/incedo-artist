import { Artist } from "../models/Artist";

export interface IArtistController {
    getArtistsByName(name: string): Artist[]
}