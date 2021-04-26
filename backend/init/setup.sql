CREATE TABLE artist (
	id VARCHAR(36) PRIMARY KEY,
	name TEXT NOT NULL
);

CREATE TABLE genre (
	id VARCHAR(36) PRIMARY KEY,
	name TEXT NOT NULL
);

CREATE TABLE playlist (
	id VARCHAR(36) PRIMARY KEY,
	name TEXT NOT NULL
);

CREATE TABLE music (
	id VARCHAR(36) PRIMARY KEY,
	name TEXT NOT NULL,
	file_path TEXT NOT NULL,
	release_year INT,
	music_length INT 
);

CREATE TABLE rel_sung_by (
	artist_id VARCHAR(36) NOT NULL,
	music_id VARCHAR(36) NOT NULL,
	artist_sequence INT NOT NULL,
	CONSTRAINT FK_sung_by_artist_id FOREIGN KEY (artist_id) REFERENCES artist(id),
	CONSTRAINT FK_sung_by_music_id FOREIGN KEY (music_id) REFERENCES music(id)
);

CREATE TABLE rel_part_of_paylist (
	playlist_id VARCHAR(36) NOT NULL,
	music_id VARCHAR(36) NOT NULL,
	track_number INT NOT NULL,
	CONSTRAINT FK_playlist_playlist_id FOREIGN KEY (playlist_id) REFERENCES playlist(id),
	CONSTRAINT FK_playlist_music_id FOREIGN KEY (music_id) REFERENCES music(id)
);

CREATE TABLE rel_belongs_to_genre (
	genre_id VARCHAR(36) NOT NULL,
	music_id VARCHAR(36) NOT NULL,
	CONSTRAINT FK_genre_genre_id FOREIGN KEY (genre_id) REFERENCES genre(id),
	CONSTRAINT FK_genre_music_id FOREIGN KEY (music_id) REFERENCES music(id)
);