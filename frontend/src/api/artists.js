import axios from 'axios';

// export const getArtistById = async (id) => artists.find((el) => el.id === id);

// eslint-disable-next-line import/prefer-default-export
export const getAllArtists = async () => {
  const res = await axios.get('http://localhost:8000/api/artist');
  return res.data;
};
