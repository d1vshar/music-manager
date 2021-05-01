export type MusicDto = {
  id: string,
  name: string,
  releaseYear: number,
  file: string,
  musicLength: number,
  artistIds: Array<string>,
  genreIds: Array<string>
};

export type DeleteDto = {
  id: string,
  success: boolean
}

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
