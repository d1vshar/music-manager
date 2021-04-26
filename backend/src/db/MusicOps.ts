import { v4 as uuidv4 } from 'uuid';
import connection from './Connection';
import logger from '../../config/winston';
import { Music } from './types';

export const getMusicById = (id: string) => {};

export const getAllMusic = () => {};

export const createMusic = async (newMusic: Music): Promise<Music> => {
  newMusic.id = uuidv4();

  const conn = await connection;

  await conn.execute(
    'INSERT INTO music (id, name, file_path, music_length, release_year) '
      + 'VALUES (?, ?, ?, ?, ?)',
    [
      newMusic.id,
      newMusic.name,
      newMusic.file,
      newMusic.music_length,
      newMusic.release_year,
    ],
  );

  logger.debug(`Inserted music: ${JSON.stringify(newMusic)}`);
  return newMusic;
};

export const updateMusic = (updatedMusic: Music) => {};

export const deleteMusicById = (id: string) => {};
