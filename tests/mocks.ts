import { ArtistCSV } from './../src/models/Artist';

export const artistMock: ArtistCSV[] = [
  {
    name: 'Eminem',
    mbid: '123',
    image_small: 'https://placeholderimage.com',
    image: 'https://placeholderimage.com',
  },
];

export const artistsMock = [
  {
    name: 'Eminem',
    listeners: '5203240',
    mbid: 'b95ce3ff-3d05-4e87-9e01-c97b66af13d4',
    url: 'https://www.last.fm/music/Eminem',
    streamable: '0',
    image: [
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
        size: 'small',
      },
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
        size: 'medium',
      },
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        size: 'large',
      },
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
        size: 'extralarge',
      },
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
        size: 'mega',
      },
    ],
  },
  {
    name: 'Eminem & Linkin Park',
    listeners: '9586',
    mbid: 'b95ce3ff-3d05-4e87-9e01-c97b66af13d4',
    url: 'https://www.last.fm/music/Eminem+&+Linkin+Park',
    streamable: '0',
    image: [
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
        size: 'small',
      },
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
        size: 'medium',
      },
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        size: 'large',
      },
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
        size: 'extralarge',
      },
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
        size: 'mega',
      },
    ],
  },
];

export const artistMapResult: ArtistCSV[] = [
  {
    name: 'Eminem',
    mbid: 'b95ce3ff-3d05-4e87-9e01-c97b66af13d4',
    image_small:
      'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
    image:
      'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
  },
  {
    name: 'Eminem & Linkin Park',
    mbid: 'b95ce3ff-3d05-4e87-9e01-c97b66af13d4',
    image_small:
      'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
    image:
      'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
  },
];

export const randomArtistsMock: Array<{ name: string }> = [
  { name: 'mcfirrj' },
  { name: 'lil usersina' },
  { name: 'nimo' },
];
