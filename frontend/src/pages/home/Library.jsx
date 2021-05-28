import React, { useEffect, useState } from 'react';
import { getAllGenres } from '../../api/genres';
import { getAllArtists } from '../../api/artists';
import { getAllSongs } from '../../api/songs';
import { getAllPlaylists } from '../../api/playlists';
import PlaylistCardList from './playlists/PlaylistCardList';
import SongTable from '../../components/songtable/SongTable';

const Library = () => {
  const [songObjList, setSongObjList] = useState([]);
  const [playlistObjList, setPlaylistObj] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultSongs = await getAllSongs();
      const resultArtists = await getAllArtists();
      const resultGenres = await getAllGenres();
      const resultPlaylists = await getAllPlaylists();
      const tempSongObjList = [];

      resultSongs.forEach((song) => {
        const songArtistsNames = [];
        const songGenreNames = [];

        song.artistIds.forEach((artistId) => {
          const resultArtistName = resultArtists.find((artist) => artist.id === artistId).name;
          songArtistsNames.push(resultArtistName);
        });

        song.genreIds.forEach((genreId) => {
          const resultGenreName = resultGenres.find((genre) => genre.id === genreId).name;
          songGenreNames.push(resultGenreName);
        });

        const songObj = {
          id: song.id,
          name: song.name,
          file: song.file,
          cover: song.cover,
          artists: songArtistsNames,
          genres: songGenreNames,
          musicLength: song.musicLength,
          releaseYear: song.releaseYear,
        };

        tempSongObjList.push(songObj);
      });

      setPlaylistObj(resultPlaylists);
      setSongObjList(tempSongObjList);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <PlaylistCardList songs={songObjList} playlists={playlistObjList} />
      <SongTable title="All Songs" data={songObjList} />
      <div style={{ height: '80px' }} />
    </div>
  );
};

export default Library;
