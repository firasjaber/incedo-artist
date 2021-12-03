"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapToCSV = void 0;
function mapToCSV(artist) {
    return {
        name: artist.name,
        mbid: artist.mbid || "mbid not found",
        image_small: artist.image[0]["#text"] || "no small_image",
        image: artist.image[1]["#text"] || "no image",
    };
}
exports.mapToCSV = mapToCSV;
