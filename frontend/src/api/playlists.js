import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const getAllPlaylists = async () => {
  const res = await axios.get('http://localhost:8000/api/playlist');
  return res.data;
};
