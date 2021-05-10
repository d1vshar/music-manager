import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';

import 'react-jinke-music-player/assets/index.css';

const options = {
  toggleMode: false,
  showDestroy: false,
  showReload: false,
  showDownload: false,
  showLyric: false,
  drag: false,
  showThemeSwitch: false,
  quietUpdate: true,
  clearPriorAudioLists: true,
  responsive: false,
  mode: 'full',
  theme: 'light',
};

const MusicPlayerBar = () => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ReactJkMusicPlayer {...options} />
);

export default MusicPlayerBar;
