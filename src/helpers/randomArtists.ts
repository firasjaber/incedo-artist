import { promises as fs } from 'fs';
import path from 'path';

/**
 * Retrieve random artists from JSON system file
 * @returns Array<{ name : "example" }>
 */
export const randomArtists = async () => {
  const buffer = await fs.readFile(path.join(__dirname, 'artists.json'));
  const { artists } = JSON.parse(buffer.toString());
  return artists;
};
