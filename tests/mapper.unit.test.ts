import { mapToCSV } from '../helpers';
import { artistMapResult, artistsMock } from './mocks';

describe('Mapper unit tests', () => {
  it('map artist data to ArtistCSV interface', () => {
    const csvArtists = artistsMock.map((artist) => mapToCSV(artist));
    expect(csvArtists).toEqual(artistMapResult);
  });
});
