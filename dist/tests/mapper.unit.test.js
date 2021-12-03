"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./../src/helpers");
const mocks_1 = require("./mocks");
describe('Mapper unit tests', () => {
    it('map artist data to ArtistCSV interface', () => {
        const csvArtists = mocks_1.artistsMock.map((artist) => (0, helpers_1.mapToCSV)(artist));
        expect(csvArtists).toEqual(mocks_1.artistMapResult);
    });
});
