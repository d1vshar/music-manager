export type Music = {
  id: string;
  name: string;
  release_year: number;
  file: string;
  music_length: number;
};

export type Rel_Sung_by = {
  music_id: string;
  artist_id: string;
  artist_sequence: number;
};

export type Rel_Belongs_To_Genre = {
  music_id: string;
  genre_id: string;
};

export type Artist = {
  id: string;
  name: string;
};

export type Playlist = {
  id: string;
  name: string;
  songs: Array<string>;
  totalLength: number;
};

export type Genre = {
  id: string;
  name: string;
};

export type SingleQuery = {
  query: string;
  values: any[];
};
