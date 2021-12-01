export interface Artist {
    name: string;
    listeners: string;
    mbid: string;
    url: string;
    streamable: string;
    // image: Array<{"#text": string, size: string}>
    image: Image[]
}

interface Image {
    ["#text"]: string;
    size: string;
}

//(name, mbid url, image_small, image)
export interface ArtistCSV {
    name: string,
    mbid: string;
    image_small: string,
    image: string
}

export interface ArtistQueryParams {
    name: string;
    filename?: string;
}