import { artists } from './data';

export const getArtistById = async (id) => artists.find((el) => el.id === id);

export const getAllArtists = async () => artists;
