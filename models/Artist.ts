export interface Artist {
    name: string;
    listeners: string;
    nbid: string;
    url: string;
    streamable: string;
    image: Array<{"#text": string, size: string}>
}

// interface Image {
//     "#text": string,
//     size: string
// }

export interface IArtistQueryParams {
    name: string;
    format?: DataFormat;
}

export enum DataFormat {
    CSV,
    JSON,
}