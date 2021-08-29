// export const getGenreById = async (id) => genres.find((el) => el.id === id);
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const getAllGenres = async () => {
  const res = await axios.get('http://localhost:8000/api/genre');
  return res.data;
};
