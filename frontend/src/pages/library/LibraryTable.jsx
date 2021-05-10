import React from 'react';
import PropTypes from 'prop-types';

import PlayButton from '../../components/PlayButton';
import QueueButton from '../../components/QueueButton';

const LibraryTable = (props) => (
  <table className="min-w-full table-fixed divide-y divide-gray-200">
    <LibraryTableHeader />
    <LibraryTableBody {...props} />
  </table>
);

const LibraryTableHeader = () => (
  <thead className="bg-gray-50">
    <tr>
      <th
        scope="col"
        className="px-6 py-3 w-1/12 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        aria-label="Song Image"
      />
      <th
        scope="col"
        className="px-6 py-3 w-3/12 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        Title
      </th>
      <th
        scope="col"
        className="px-6 py-3 w-3/12 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        Artist
      </th>
      <th
        scope="col"
        className="px-6 py-3 w-3/12 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        Genres
      </th>
      <th
        scope="col"
        className="px-6 py-3 w-1/12 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        Length
      </th>
      <th
        scope="col"
        className="px-6 py-3 w-1/12 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        aria-label="Controls"
      />
    </tr>
  </thead>
);

const LibraryTableBody = ({ songs = null, artists = null, genres = null }) => {
  if ((songs != null) && (artists != null) && (genres != null)) {
    return (
      <tbody className="bg-white divide-y divide-gray-200">
        {songs.map((song) => (
          <tr key={song.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={song.cover}
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    {song.title}
                  </div>
                  <div className="text-sm text-gray-500">
                    {song.releasedYear}
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{song.name}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">
                {song.artistIds.map(
                  (id) => artists.find((artist) => artist.id === id).name,
                )}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {song.genreIds.map(
                  (id) => genres.find((genre) => genre.id === id).name,
                )}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {Math.floor(song.musicLength / 60)}
              :
              {song.musicLength % 60}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <PlayButton />
              <QueueButton />
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      <tr>
        <td colSpan={5}>
          <p className="p-2 text-center max-w-full">Loading...</p>
        </td>
      </tr>
    </tbody>
  );
};

LibraryTableBody.propTypes = {
  songs: PropTypes.array,
  artists: PropTypes.array,
  genres: PropTypes.array,
};

export default LibraryTable;
