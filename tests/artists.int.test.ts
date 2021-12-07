import path from 'path';
import fs from 'fs';
import request from 'supertest';
import { randomArtists } from '../src/helpers';
import app from './../src/app';

describe('Artists endpoints', () => {
  it('request with missing param :name should return an error', async () => {
    const response = await request(app).get('/artists/');
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual({
      success: false,
      message: 'missing param : name',
    });
  });
  it('request with missing param :filename should return an error', async () => {
    const response = await request(app).get('/artists?name=eminem');
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual({
      success: false,
      message: 'missing param : filename',
    });
  });
  it('request with correct params and invalid artist name should return an array of random artists retrieved from JSON file', async () => {
    const response = await request(app).get(
      '/artists?name=azerty987&filename=testfile'
    );
    expect(response.statusCode).toEqual(200);
    expect(response.body.data).toEqual(await randomArtists());
  });
  it('request with correct params and valid artist name should return an array of artists data and write CSV file', async () => {
    const response = await request(app).get(
      '/artists?name=eminem&filename=testfile'
    );
    const outDirectory = path.join(__dirname, './../out/testfile.csv');
    expect(response.statusCode).toEqual(200);
    expect(response.body.data).toBeTruthy();
    expect(fs.existsSync(outDirectory)).toBe(true);
    //teardown
    fs.unlinkSync(outDirectory);
  });
});
