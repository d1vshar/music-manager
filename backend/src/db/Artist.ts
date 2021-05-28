import logger from '../../config/winston';
import { ArtistDto } from '../dto/types';
import { execute } from './db';
import { Artist, SingleQuery } from './models';

export const getArtistById = () => {

};

export const getAllArtists = (
  out: (res: ArtistDto[] | null, err: Error | null) => void,
) => {
  const queries: SingleQuery[] = [];

  queries.push({
    query: 'SELECT * FROM artist',
    values: [],
  });

  execute(queries)
    .then((result) => {
      const artistDtoList: ArtistDto[] = [];

      const allArtists = result[0][0] as Artist[];

      allArtists.forEach((artist) => {
        artistDtoList.push({
          id: artist.id,
          name: artist.name,
        });
      });

      logger.debug(`Fetched all artists: ${artistDtoList.length} songs.`);
      out(artistDtoList, null);
    })
    .catch((error) => {
      logger.error(`Failed fetch all artists: ${JSON.stringify(error)}`);
      out(null, error);
    });
};

export const createArtist = () => {

};

export const updateArtist = () => {

};

export const deleteArtist = () => {

};
