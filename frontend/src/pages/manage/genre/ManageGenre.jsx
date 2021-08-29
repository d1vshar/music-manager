import React, { useEffect, useState } from 'react';
import { getAllGenres } from '../../../api/genres';
import GenreDeleteButton from './GenreDeleteButton';

const ManageGenre = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allGenres = await getAllGenres();
      setGenres(allGenres);
    };

    fetchData();
  }, []);

  return (
    <div className="py-2">
      <div className="flex flex-row">
        <p className="text-xl">
          Genres -
          {' '}
          {genres.length}
        </p>
      </div>
      <table className="min-w-full table-fixed">
        <thead>
          <tr>
            <th
              scope="col"
              className="px-6 py-3 w-2/6 text-left text-xs font-medium uppercase tracking-wider"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 w-3/6 text-left text-xs font-medium uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 w-1/6 text-left text-xs font-medium uppercase tracking-wider"
            >
              Name
            </th>
          </tr>
        </thead>
        <tbody>
          {genres.map((genreObj) => (
            <tr key={genreObj.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {genreObj.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-medium">
                  {genreObj.name}
                </div>
              </td>
              <td>
                <GenreDeleteButton />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageGenre;
