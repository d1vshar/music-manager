import React from 'react';
import PropTypes from 'prop-types';

import SongTableHeader from './SongTableHeader';
import SongTableBody from './SongTableBody';
import PlayAllButton from '../buttons/PlayAllButton';

const SongTable = ({ title, data }) => (
  <div className="py-2">
    <div className="flex flex-row">
      <p className="text-xl">
        {title}
        {data ? ` - ${data.length}` : ''}
      </p>
      <div className="ml-auto">
        <PlayAllButton songObjList={data} />
      </div>
    </div>
    <table className="min-w-full table-fixed">
      <SongTableHeader />
      <SongTableBody data={data} />
    </table>
  </div>
);

SongTable.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default SongTable;
