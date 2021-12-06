export const LASTFM_API_KEY = process.env.LASTFM_API_KEY;
export const BASE_URL = `https://ws.audioscrobbler.com/2.0/?api_key=${LASTFM_API_KEY}&format=json&method=artist.search`;
export const PORT = process.env.PORT;