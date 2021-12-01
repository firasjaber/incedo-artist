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
        mbid: artist.mbid || "mbid not found",
        image_small: artist.image[0]["#text"] || "no small_image",
        image: artist.image[1]["#text"] || "no image",
    }
}