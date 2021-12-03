import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { writeFile } from '../src/helpers';
import { artistMock } from './mocks';

describe('File writer unit tests', () => {
  let filename = 'testfile';
  let outPath = path.join(__dirname, '../out/') + filename + '.csv';

  test('csv file created', async () => {
    await writeFile(filename, artistMock);
    expect(fs.existsSync(outPath)).toBe(true);
  });

  test('data written succesfully', async () => {
    let results: any[] = [];

    fs.createReadStream(outPath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        expect(results).toStrictEqual(artistMock);
        if (fs.existsSync(outPath)) fs.unlinkSync(outPath);
      });
  });
});
