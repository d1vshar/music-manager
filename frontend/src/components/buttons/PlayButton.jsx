import { PlayIcon } from '@heroicons/react/outline';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setQueue } from '../../slices';

const PlayButton = ({ songObj }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    const jinkeMusicObj = {
      name: songObj.name,
      musicSrc: songObj.file,
      cover: songObj.cover,
      singer: songObj.artists.join(', '),
      duration: songObj.musicLength,
    };
    dispatch(setQueue([jinkeMusicObj]));
  };

  return (
    <span>
      <button
        type="button"
        className="button p-1 rounded-full shadow-sm text-sm bg-white text-black font-medium"
        onClick={handleClick}
      >
        <PlayIcon className="h-6 w-6 mx-auto" aria-hidden="true" />
      </button>
    </span>
  );
};

PlayButton.propTypes = {
  songObj: PropTypes.object.isRequired,
};

export default PlayButton;
