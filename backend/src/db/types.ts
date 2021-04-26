export type Music = {
  id: string,
  name: string,
  release_year: number,
  file: string,
  music_length: number,
  artistId: string,
  genre: Array<string>
};

export type Artist = {
  id: string,
  name: string
};

export type Playlist = {
  id: string,
  name: string,
  songs: Array<string>,
  totalLength: number
};

export type Genre = {
  id: string,
  name: string
};
