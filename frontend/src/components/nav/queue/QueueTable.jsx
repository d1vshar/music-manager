/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

const QueueTable = ({ queue }) => (
  <div className="overflow-y-auto overflow-x-hidden max-h-96">
    <table className="w-full table-fixed">
      <QueueTableBody queue={queue} />
    </table>
  </div>
);

QueueTable.propTypes = {
  queue: PropTypes.array.isRequired,
};

const QueueTableBody = ({ queue }) => (
  <tbody>
    {queue.map((jinkeSongObj, index) => (
      <tr key={index}>
        <td className="w-1/12 px-6 py-4 whitespace-nowrap">
          <div className="text-sm font-medium">
            {index + 1}
          </div>
        </td>
        <td className="w-1/12 px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-12 w-12">
              <img
                className="h-12 w-12 rounded-full"
                src={jinkeSongObj.cover}
                alt=""
              />
            </div>
          </div>
        </td>
        <td className="w-4/12 px-6 py-4 whitespace-nowrap">
          <div className="text-sm font-medium">
            {jinkeSongObj.name}
          </div>
        </td>
        <td className="w-4/12 px-6 py-4 whitespace-nowrap">
          <div className="text-sm">
            {jinkeSongObj.singer}
          </div>
        </td>
        <td className="w-1/12 px-6 py-4 whitespace-nowrap text-sm">
          {Math.floor(jinkeSongObj.duration / 60)}
          :
          {jinkeSongObj.duration % 60}
        </td>
      </tr>
    ))}
  </tbody>
);

QueueTableBody.propTypes = {
  queue: PropTypes.array.isRequired,
};

export default QueueTable;
