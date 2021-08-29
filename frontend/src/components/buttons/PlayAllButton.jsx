import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setQueue } from '../../slices';

const PlayAllButton = ({ songObjList }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    const jinkeMusicObjList = songObjList.map((songObj) => ({
      name: songObj.name,
      musicSrc: songObj.file,
      cover: songObj.cover,
      singer: songObj.artists.join(', '),
      duration: songObj.musicLength,
    }));

    dispatch(setQueue(jinkeMusicObjList));
  };

  return (
    <span>
      <button
        type="button"
        className="button p-2 w-24 rounded-full shadow-sm text-sm bg-white text-black font-medium"
        onClick={handleClick}
      >
        Play All
      </button>
    </span>
  );
};

PlayAllButton.propTypes = {
  songObjList: PropTypes.array.isRequired,
};

export default PlayAllButton;
