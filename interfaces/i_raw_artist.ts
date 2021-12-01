import { Artist } from "../models/Artist";

export interface IRawArtist {
    results: {
        artistsmatch: {
            artist: Artist[]
        }
    }
}