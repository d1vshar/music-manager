import { songs } from './data';

export const getSongById = async (id) => songs.find((el) => el.id === id);

export const getAllSongs = async () => songs;
