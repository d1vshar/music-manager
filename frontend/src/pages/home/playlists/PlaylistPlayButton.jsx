import React from 'react';
import PropTypes from 'prop-types';
import { PlayIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { setQueue } from '../../../slices';

const PlaylistPlayButton = ({ playlistObj }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    const jinkeMusicObjList = playlistObj.songs.map((song) => ({
      name: song.name,
      musicSrc: song.file,
      cover: song.cover,
      singer: song.artists.join(', '),
      duration: song.musicLength,
    }));

    dispatch(setQueue(jinkeMusicObjList));
  };

  return (
    <span>
      <button
        type="button"
        className="w-24 button p-1 rounded-full shadow-sm text-sm bg-white text-black font-medium"
        onClick={handleClick}
      >
        <PlayIcon className="h-5 w-5 mx-auto" aria-hidden="true" />
      </button>
    </span>
  );
};

PlaylistPlayButton.propTypes = {
  playlistObj: PropTypes.object.isRequired,
};

export default PlaylistPlayButton;
