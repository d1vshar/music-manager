import React, { useEffect, useState } from 'react';
import { getAllGenres } from '../../api/genres';
import { getAllArtists } from '../../api/artists';
import { getAllSongs } from '../../api/songs';
import LibraryTable from './LibraryTable';

const Library = () => {
  const [songs, setSongs] = useState(null);
  const [artists, setArtists] = useState(null);
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const resultSongs = await getAllSongs();
      const resultArtists = await getAllArtists();
      const resultGenres = await getAllGenres();

      setSongs(resultSongs);
      setArtists(resultArtists);
      setGenres(resultGenres);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <LibraryTable
              songs={songs}
              artists={artists}
              genres={genres}
            />
          </div>
        </div>
      </div>
      <div style={{ height: '80px' }} />
    </div>
  );
};

export default Library;
