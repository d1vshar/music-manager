import { v4 as uuidv4 } from "uuid";
import { execute } from "./db";
import logger from "../../config/winston";
import { Music, Rel_Belongs_To_Genre, Rel_Sung_by, SingleQuery } from "./types";
import { DeleteDto, MusicDto } from "../dto/types";
import createError from "http-errors";

export const createMusic = async (
  newMusicDto: MusicDto,
  out: (res: MusicDto | null, err: Error | null) => void
) => {
  newMusicDto.id = uuidv4();

  const queries: SingleQuery[] = [];

  queries.push({
    query:
      "INSERT INTO music (id, name, file_path, music_length, release_year) VALUES (?, ?, ?, ?, ?)",
    values: [
      newMusicDto.id,
      newMusicDto.name,
      newMusicDto.file,
      newMusicDto.musicLength,
      newMusicDto.releaseYear,
    ],
  });

  for (const [index, artistId] of newMusicDto.artistIds.entries()) {
    queries.push({
      query:
        "INSERT INTO rel_sung_by (artist_id, music_id, artist_sequence) VALUES (?, ?, ?)",
      values: [artistId, newMusicDto.id, index],
    });
  }

  for (const genreId of newMusicDto.genreIds) {
    queries.push({
      query:
        "INSERT INTO rel_belongs_to_genre (genre_id, music_id) VALUES (?, ?)",
      values: [genreId, newMusicDto.id],
    });
  }

  execute(queries)
    .then(() => {
      logger.debug(`Insertion in music: ${JSON.stringify(newMusicDto)}`);
      out(newMusicDto, null);
    })
    .catch((error) => {
      logger.error(`Failed insertion in music: ${JSON.stringify(error)}`);
      out(null, error);
    });
};

export const getAllMusic = (
  out: (res: MusicDto[] | null, err: Error | null) => void
) => {
  const queries: SingleQuery[] = [];

  queries.push({
    query: "SELECT * FROM music",
    values: [],
  });

  queries.push({
    query: "SELECT * FROM rel_sung_by",
    values: [],
  });

  queries.push({
    query: "SELECT * FROM rel_belongs_to_genre",
    values: [],
  });

  execute(queries)
    .then((result) => {
      const musicDtoList: MusicDto[] = [];

      let allMusic = result[0][0] as Music[];
      let allSungBy = result[1][0] as Rel_Sung_by[];
      let allBelongsToGenre = result[2][0] as Rel_Belongs_To_Genre[];

      for (const music of allMusic) {
        const artists = allSungBy
          .filter((el) => el.music_id === music.id)
          .map((el) => el.artist_id);
        const genres = allBelongsToGenre
          .filter((el) => el.music_id === music.id)
          .map((el) => el.genre_id);

        musicDtoList.push({
          id: music.id,
          name: music.name,
          file: music.file,
          musicLength: music.music_length,
          releaseYear: music.release_year,
          artistIds: artists,
          genreIds: genres,
        });
      }

      logger.debug(`Fetched all music: ${musicDtoList.length} songs.`);
      out(musicDtoList, null);
    })
    .catch((error) => {
      logger.error(`Failed fetch all music: ${JSON.stringify(error)}`);
      out(null, error);
    });
};

export const getMusicById = async (
  id: string,
  out: (res: MusicDto | null, err: Error | null) => void
) => {
  const queries: SingleQuery[] = [];

  queries.push({
    query: "SELECT * FROM music WHERE id = ?",
    values: [id],
  });

  queries.push({
    query: "SELECT * FROM rel_belongs_to_genre WHERE music_id = ?",
    values: [id],
  });

  queries.push({
    query:
      "SELECT * FROM rel_sung_by WHERE music_id = ? ORDER BY artist_sequence",
    values: [id],
  });

  execute(queries)
    .then((result) => {
      let musicDto: MusicDto;

      let resultMusicList = result[0][0] as Music[];
      let relBelongsToGenre = result[1][0] as Rel_Belongs_To_Genre[];
      let relSungBy = result[2][0] as Rel_Sung_by[];

      if (resultMusicList.length == 1) {
        const music = resultMusicList[0];
        const genres = relBelongsToGenre.map((el) => el.genre_id);
        const artists = relSungBy.map((el) => el.artist_id);

        musicDto = {
          id: music.id,
          name: music.name,
          file: music.file,
          musicLength: music.music_length,
          releaseYear: music.release_year,
          artistIds: artists,
          genreIds: genres,
        };

        logger.debug(`Feteched music by id: ${musicDto}`);
        out(musicDto, null);
      } else {
        out(null, createError(404, "Not found"));
      }
    })
    .catch((error) => {
      logger.error(`Failed fetch music: ${JSON.stringify(error)}`);
      out(null, error);
    });
};

export const updateMusic = (
  updatedMusic: MusicDto,
  out: (res: MusicDto | null, err: Error | null) => void
) => {};

export const deleteMusicById = (
  id: string,
  out: (res: DeleteDto | null, err: Error | null) => void
) => {
  const queries: SingleQuery[] = [];

  queries.push({
    query: "DELETE FROM rel_belongs_to_genre WHERE music_id = ?",
    values: [id],
  });

  queries.push({
    query: "DELETE FROM rel_sung_by WHERE music_id = ?",
    values: [id],
  });

  queries.push({
    query: "DELETE FROM music WHERE id = ?",
    values: [id],
  });

  execute(queries)
    .then((result) => {
      logger.debug(`Deleted music with id: ${id}`);
      out({ id: id, success: true }, null);
    })
    .catch((error) => {
      logger.error(`Failed delete music: ${JSON.stringify(error)}`);
      out(null, error);
    });
};
