import React from 'react';

const SongTableHeader = () => (
  <thead>
    <tr>
      <th
        scope="col"
        className="px-6 py-3 w-1/12 text-left text-xs font-medium uppercase tracking-wider"
        aria-label="Song Image"
      />
      <th
        scope="col"
        className="px-6 py-3 w-3/12 text-left text-xs font-medium uppercase tracking-wider"
      >
        Title
      </th>
      <th
        scope="col"
        className="px-6 py-3 w-3/12 text-left text-xs font-medium uppercase tracking-wider"
      >
        Artist
      </th>
      <th
        scope="col"
        className="px-6 py-3 w-3/12 text-left text-xs font-medium uppercase tracking-wider"
      >
        Genres
      </th>
      <th
        scope="col"
        className="px-6 py-3 w-1/12 text-left text-xs font-medium uppercase tracking-wider"
      >
        Length
      </th>
      <th
        scope="col"
        className="px-6 py-3 w-1/12 text-left text-xs font-medium uppercase tracking-wider"
        aria-label="Controls"
      />
    </tr>
  </thead>
);

export default SongTableHeader;
