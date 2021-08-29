import logger from '../../config/winston';
import { PlaylistDto } from '../dto/types';
import { execute } from './db';
import { Playlist, RelPartOfPlaylist, SingleQuery } from './models';

export const getPlaylistById = () => {

};

export const getAllPlaylists = (out: (res: PlaylistDto[] | null, err: Error | null) => void) => {
  const queries: SingleQuery[] = [];

  queries.push({
    query: 'SELECT * FROM playlist',
    values: [],
  });

  queries.push({
    query: 'SELECT * FROM rel_part_of_paylist',
    values: [],
  });

  execute(queries)
    .then((result) => {
      const playlistDtoList: PlaylistDto[] = [];

      const allPlaylist = result[0][0] as Playlist[];
      const allPartOfPlaylist = result[1][0] as RelPartOfPlaylist[];

      allPlaylist.forEach((playlist) => {
        const songsInPlaylist = allPartOfPlaylist
          .filter((el) => el.playlist_id === playlist.id)
          .map((el) => el.music_id);

        playlistDtoList.push({
          id: playlist.id,
          name: playlist.name,
          songIds: songsInPlaylist,
        });
      });

      logger.debug(`Fetched all playlists: ${playlistDtoList.length} songs.`);
      out(playlistDtoList, null);
    })
    .catch((error) => {
      logger.error(`Failed fetch all playlists: ${JSON.stringify(error)}`);
      out(null, error);
    });
};

export const createPlaylist = () => {

};

export const updatePlaylistById = () => {

};

export const deletePlaylistById = () => {

};
