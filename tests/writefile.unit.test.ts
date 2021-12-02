import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { writeFile } from '../helpers';
import { ArtistCSV } from '../models/Artist';

describe('File writer unit tests', () => {
  let mockData: ArtistCSV[] = [
    {
      name: 'Eminem',
      mbid: '123',
      image_small: 'https://placeholderimage.com',
      image: 'https://placeholderimage.com',
    },
  ];
  let filename = 'testfile';
  let outPath = path.join(__dirname, '../out/') + filename + '.csv';

  test('csv file created', async () => {
    await writeFile(filename, mockData);
    expect(fs.existsSync(outPath)).toBe(true);
  });

  test('data written succesfully', async () => {
    let results: any[] = [];

    fs.createReadStream(outPath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        expect(results).toStrictEqual(mockData);
        if (fs.existsSync(outPath)) fs.unlinkSync(outPath);
      });
  });
});
