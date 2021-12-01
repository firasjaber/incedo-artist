import { Artist } from '../models/Artist';

export interface IRawArtist {
  results: {
    artistmatches: {
      artist: Artist[];
    };
  };
}
