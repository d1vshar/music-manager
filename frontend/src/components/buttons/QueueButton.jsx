import { ChevronDoubleDownIcon } from '@heroicons/react/outline';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { addToQueue } from '../../slices';

const QueueButton = ({ songObj }) => {
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
    dispatch(addToQueue([jinkeMusicObj]));
  };

  return (
    <span>
      <button
        type="button"
        className="button p-2 rounded-full shadow-sm text-sm bg-white text-black font-medium"
        onClick={handleClick}
      >
        <ChevronDoubleDownIcon className="h-5 w-5 mx-auto" aria-hidden="true" />
      </button>
    </span>
  );
};

QueueButton.propTypes = {
  songObj: PropTypes.object.isRequired,
};

export default QueueButton;
