// export const getSongById = async (id) => songs.find((el) => el.id === id);

import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const getAllSongs = async () => {
  const res = await axios.get('http://localhost:8000/api/music');
  return res.data;
};
