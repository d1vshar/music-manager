import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import { useSelector } from 'react-redux';

const MusicPlayerBar = () => {
  const queue = useSelector((state) => state.musicQueue.queue);

  const options = {
    audioLists: queue,
    toggleMode: false,
    showDestroy: false,
    showReload: false,
    showDownload: false,
    showLyric: false,
    drag: false,
    showThemeSwitch: false,
    quietUpdate: true,
    clearPriorAudioLists: true,
    showMediaSession: true,
    responsive: false,
    mode: 'full',
    theme: 'light',
    sortableOptions: {
      disabled: true,
    },
  };

  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <ReactJkMusicPlayer {...options} />
  );
};

export default MusicPlayerBar;
