import { genres } from './data';

export const getGenreById = async (id) => genres.find((el) => el.id === id);

export const getAllGenres = async () => genres;
