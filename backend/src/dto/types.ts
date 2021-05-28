export type MusicDto = {
  id: string;
  name: string;
  releaseYear: number;
  cover: string;
  file: string;
  musicLength: number;
  artistIds: Array<string>;
  genreIds: Array<string>;
};

export type ArtistDto = {
  id: string;
  name: string;
};

export type PlaylistDto = {
  id: string;
  name: string;
  songIds: Array<string>;
};

export type GenreDto = {
  id: string;
  name: string;
};

export type ResponseDto = {
  timestamp: string;
  data: Array<MusicDto | ArtistDto | PlaylistDto | GenreDto>;
  errors?: any;
};
