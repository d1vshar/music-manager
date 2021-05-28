export type Music = {
  id: string;
  name: string;
  cover: string;
  release_year: number;
  file_path: string;
  music_length: number;
};

export type RelSungBy = {
  music_id: string;
  artist_id: string;
  artist_sequence: number;
};

export type RelBelongsToGenre = {
  music_id: string;
  genre_id: string;
};

export type RelPartOfPlaylist = {
  playlist_id: string;
  music_id: string;
  track_number: number;
};

export type Artist = {
  id: string;
  name: string;
};

export type Playlist = {
  id: string;
  name: string;
};

export type Genre = {
  id: string;
  name: string;
};

export type SingleQuery = {
  query: string;
  values: any[];
};
