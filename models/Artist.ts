export interface Artist {
    name: string;
    listeners: string;
    nbid: string;
    url: string;
    streamable: string;
    image: Array<{"#text": string, size: string}>
}

export interface ArtistQueryParams {
    name: string;
    filename?: string;
}