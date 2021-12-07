import { randomArtists } from './../src/helpers/randomArtists';
import { randomArtistsMock } from './mocks';

describe('Random Artists', () => {
  test('retrieving random artists from JSON file', async () => {
    const artists = await randomArtists();
    expect(artists).toEqual(randomArtistsMock);
  });
});
