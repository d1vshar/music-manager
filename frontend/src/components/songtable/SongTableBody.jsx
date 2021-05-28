import React from 'react';
import PropTypes from 'prop-types';
import PlayButton from '../buttons/PlayButton';
import QueueButton from '../buttons/QueueButton';

const SongTableBody = ({ data }) => {
  if (data.length > 0) {
    return (
      <tbody>
        {data.map((songObj) => (
          <tr key={songObj.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={songObj.cover}
                    alt=""
                  />
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="font-medium">
                {songObj.name}
              </div>
              <div className="text-darkgray">
                {songObj.releaseYear}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {songObj.artists.join(', ')}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {songObj.genres.map((genreName) => (
                <span key={songObj.genreName} className="px-2 mr-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-darkgray text-black">
                  {genreName}
                </span>
              ))}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {Math.floor(songObj.musicLength / 60)}
              :
              {(songObj.musicLength % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right font-medium">
              <span className="ml-2"><PlayButton songObj={songObj} /></span>
              <span className="ml-2"><QueueButton songObj={songObj} /></span>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
  return (
    <tbody>
      <tr>
        <td colSpan={5}>
          <p className="p-2 text-center max-w-full">Loading...</p>
        </td>
      </tr>
    </tbody>
  );
};

SongTableBody.propTypes = {
  data: PropTypes.array.isRequired,
};

export default SongTableBody;
