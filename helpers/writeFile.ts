import { createObjectCsvWriter } from 'csv-writer';
import fs from 'fs';
import path from 'path';

export async function writeFile(filename: string, data: any) {
  const logDirectory = path.join(__dirname, '../out/');
  fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
  const csvWriter = createObjectCsvWriter({
    path: path.join(logDirectory, `${filename}.csv`),
    header: [
      { id: 'name', title: 'Name' },
      { id: 'mbid', title: 'Mbid' },
      { id: 'image_small', title: 'Image_small' },
      { id: 'image', title: 'Image' },
    ],
  });
  try {
    await csvWriter.writeRecords(data);
  } catch (error) {
    console.log(error);
  }
}
