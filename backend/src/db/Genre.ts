import logger from '../../config/winston';
import { GenreDto } from '../dto/types';
import { execute } from './db';
import { Genre, SingleQuery } from './models';

export const getAllGenres = (
  out: (res: GenreDto[] | null, err: Error | null) => void,
) => {
  const queries: SingleQuery[] = [];

  queries.push({
    query: 'SELECT * FROM genre',
    values: [],
  });

  execute(queries)
    .then((result) => {
      const genreDtoList: GenreDto[] = [];

      const allGenres = result[0][0] as Genre[];

      allGenres.forEach((genre) => {
        genreDtoList.push({
          id: genre.id,
          name: genre.name,
        });
      });

      logger.debug(`Fetched all genres: ${genreDtoList.length} genres.`);
      out(genreDtoList, null);
    })
    .catch((error) => {
      logger.error(`Failed fetch all genres: ${JSON.stringify(error)}`);
      out(null, error);
    });
};

export const createGenre = () => {

};
