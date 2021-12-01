import { Artist, ArtistCSV } from "../models/Artist";

/**
 * Maps an _Artist_ object into a custom object.
 * @param artist - The _Artist_ object.
 * @returns A mapped CSV Artist
 */
export function mapToCSV(artist: Artist): ArtistCSV {
    // console.log(artist.image[0])
    return {
        name: artist.name,
        mbid: artist.mbid,
        image_small: artist.image[0]["#text"],
        image: artist.image[1]["#text"],
    }
}