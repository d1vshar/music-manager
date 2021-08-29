import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlaylistDetailsButton from './PlaylistDetailsButton';
import PlaylistPlayButton from './PlaylistPlayButton';

const PlaylistCardList = ({ songs, playlists }) => {
  const [playlistObjs, setPlayListObjs] = useState([]);

  useEffect(() => {
    if (songs.length > 0 && playlists.length > 0) {
      const tempPlaylistObjs = [];
      const songMap = new Map();

      playlists.forEach((playlist) => {
        const playlistSongs = playlist.songIds.map((songId) => {
          if (songMap.has(songId)) return songMap.get(songId);
          const tempSong = songs.find((songObj) => songObj.id === songId);
          songMap.set(songId, tempSong);
          return tempSong;
        });
        tempPlaylistObjs.push({
          id: playlist.id,
          name: playlist.name,
          songs: playlistSongs,
        });
      });

      setPlayListObjs(tempPlaylistObjs);
    }
  }, [songs, playlists]);

  return (
    <div className="py-2">
      <p className="text-xl">
        Playlists
        {playlists ? ` - ${playlists.length}` : ''}
      </p>
      <div className="flex flex-row flex-wrap items-center">
        {playlistObjs.map((playlistObj) => (
          <PlaylistCard key={playlistObj.id} playlistObj={playlistObj} />
        ))}
      </div>
    </div>
  );
};

PlaylistCardList.propTypes = {
  songs: PropTypes.array.isRequired,
  playlists: PropTypes.array.isRequired,
};

const PlaylistCard = ({ playlistObj }) => {
  let totalDuration = 0;

  playlistObj.songs.forEach((obj) => {
    totalDuration += obj.musicLength;
  });

  const random = Math.floor(Math.random() * playlistObj.songs.length);

  return (
    <div className="card m-6">
      <div className="grid grid-rows-1 grid-flow-col p-5">
        <div className="row-span-2">
          <img
            className="h-44"
            src={playlistObj.songs[random].cover}
            alt=""
          />
        </div>
        <div className="col-span-2 text-lg pl-5">
          <div>
            <div className="text-lg pb-4">{playlistObj.name}</div>
            <div>
              {playlistObj.songs.length}
              {' '}
              Songs
            </div>
            <div>
              {Math.floor(totalDuration / 60)}
              :
              {(totalDuration % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
            </div>
            <div className="pt-8">
              <span className="mr-2"><PlaylistDetailsButton playlistObj={playlistObj} /></span>
              <span className="mr-2"><PlaylistPlayButton playlistObj={playlistObj} /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PlaylistCard.propTypes = {
  playlistObj: PropTypes.object.isRequired,
};

export default PlaylistCardList;
