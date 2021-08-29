import { v4 as uuidv4 } from 'uuid';
import createError from 'http-errors';
import { execute } from './db';
import logger from '../../config/winston';
import {
  Music, RelBelongsToGenre, RelSungBy, SingleQuery,
} from './models';
import { MusicDto } from '../dto/types';

export const createMusic = async (
  newMusicDto: MusicDto,
  out: (res: MusicDto | null, err: Error | null) => void,
) => {
  const toBeSavedObj = { ...newMusicDto };
  toBeSavedObj.id = uuidv4();

  const queries: SingleQuery[] = [];

  queries.push({
    query:
      'INSERT INTO music (id, name, file_path, music_length, release_year) VALUES (?, ?, ?, ?, ?)',
    values: [
      toBeSavedObj.id,
      toBeSavedObj.name,
      toBeSavedObj.file,
      toBeSavedObj.musicLength,
      toBeSavedObj.releaseYear,
    ],
  });

  toBeSavedObj.artistIds.forEach((artistId, index) => {
    queries.push({
      query:
        'INSERT INTO rel_sung_by (artist_id, music_id, artist_sequence) VALUES (?, ?, ?)',
      values: [artistId, toBeSavedObj.id, index],
    });
  });

  toBeSavedObj.genreIds.forEach((genreId) => {
    queries.push({
      query:
        'INSERT INTO rel_belongs_to_genre (genre_id, music_id) VALUES (?, ?)',
      values: [genreId, toBeSavedObj.id],
    });
  });

  execute(queries)
    .then(() => {
      logger.debug(`Insertion in music: ${JSON.stringify(toBeSavedObj)}`);
      out(toBeSavedObj, null);
    })
    .catch((error) => {
      logger.error(`Failed insertion in music: ${JSON.stringify(error)}`);
      out(null, error);
    });
};

export const getAllMusic = (
  out: (res: MusicDto[] | null, err: Error | null) => void,
) => {
  const queries: SingleQuery[] = [];

  queries.push({
    query: 'SELECT * FROM music',
    values: [],
  });

  queries.push({
    query: 'SELECT * FROM rel_sung_by',
    values: [],
  });

  queries.push({
    query: 'SELECT * FROM rel_belongs_to_genre',
    values: [],
  });

  execute(queries)
    .then((result) => {
      const musicDtoList: MusicDto[] = [];

      const allMusic = result[0][0] as Music[];
      const allSungBy = result[1][0] as RelSungBy[];
      const allBelongsToGenre = result[2][0] as RelBelongsToGenre[];

      allMusic.forEach((music) => {
        const artists = allSungBy
          .filter((el) => el.music_id === music.id)
          .map((el) => el.artist_id);
        const genres = allBelongsToGenre
          .filter((el) => el.music_id === music.id)
          .map((el) => el.genre_id);

        musicDtoList.push({
          id: music.id,
          name: music.name,
          file: music.file_path,
          cover: music.cover,
          musicLength: music.music_length,
          releaseYear: music.release_year,
          artistIds: artists,
          genreIds: genres,
        });
      });

      logger.debug(`Fetched all music: ${musicDtoList.length} songs.`);
      out(musicDtoList, null);
    })
    .catch((error) => {
      logger.error(`Failed fetch all music: ${JSON.stringify(error)}`);
      out(null, error);
    });
};

export const getMusicById = async (
  id: string,
  out: (res: MusicDto | null, err: Error | null) => void,
) => {
  const queries: SingleQuery[] = [];

  queries.push({
    query: 'SELECT * FROM music WHERE id = ?',
    values: [id],
  });

  queries.push({
    query: 'SELECT * FROM rel_belongs_to_genre WHERE music_id = ?',
    values: [id],
  });

  queries.push({
    query:
      'SELECT * FROM rel_sung_by WHERE music_id = ? ORDER BY artist_sequence',
    values: [id],
  });

  execute(queries)
    .then((result) => {
      let musicDto: MusicDto;

      const resultMusicList = result[0][0] as Music[];
      const relBelongsToGenre = result[1][0] as RelBelongsToGenre[];
      const relSungBy = result[2][0] as RelSungBy[];

      if (resultMusicList.length === 1) {
        const music = resultMusicList[0];
        const genres = relBelongsToGenre.map((el) => el.genre_id);
        const artists = relSungBy.map((el) => el.artist_id);

        musicDto = {
          id: music.id,
          name: music.name,
          cover: music.cover,
          file: music.file_path,
          musicLength: music.music_length,
          releaseYear: music.release_year,
          artistIds: artists,
          genreIds: genres,
        };

        logger.debug(`Feteched music by id: ${musicDto}`);
        out(musicDto, null);
      } else {
        out(null, createError(404, 'Not found'));
      }
    })
    .catch((error) => {
      logger.error(`Failed fetch music: ${JSON.stringify(error)}`);
      out(null, error);
    });
};

export const deleteMusicById = (
  id: string,
  out: (res: Boolean | null, err: Error | null) => void,
) => {
  const queries: SingleQuery[] = [];

  queries.push({
    query: 'DELETE FROM music WHERE id = ?',
    values: [id],
  });

  execute(queries)
    .then(() => {
      logger.debug(`Deleted music with id: ${id}`);
      out(true, null);
    })
    .catch((error) => {
      logger.error(`Failed delete music: ${JSON.stringify(error)}`);
      out(null, error);
    });
};
