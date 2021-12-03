import { createObjectCsvWriter } from 'csv-writer';
import fs from 'fs';
import path from 'path';
import { ArtistCSV } from '../models/Artist';

/**
 * Write artists data to specified CSV file
 * @param filename - CSV file name
 * @param data - array of _ArtistCSV_ object
 * @returns Boolean (file written successfully or not)
 */
export async function writeFile(filename: string, data: ArtistCSV[]) {
  const logDirectory = path.join(__dirname, './../../out/');
  fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
  const csvWriter = createObjectCsvWriter({
    path: path.join(logDirectory, `${filename}.csv`),
    header: [
      { id: 'name', title: 'name' },
      { id: 'mbid', title: 'mbid' },
      { id: 'image_small', title: 'image_small' },
      { id: 'image', title: 'image' },
    ],
  });
  try {
    await csvWriter.writeRecords(data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
