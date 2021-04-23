type Music = {
    id: string,
    name: string,
    release_year: number,
    file: string,
    length: number,
    artistId: string,
    genre: Array<string>
}

type Artist = {
    id: string,
    name: string
}

type Playlist = {
    id: string,
    name: string,
    songs: Array<string>,
    totalLength: number
}

type Genre = {
    id: string,
    name: string
}