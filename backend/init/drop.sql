DROP TABLE artist;
DROP TABLE genre;
DROP TABLE music;
DROP TABLE playlist;
DROP TABLE rel_sung_by;
DROP TABLE rel_part_of_paylist;
DROP TABLE rel_belongs_to_genre;

INSERT INTO music (id, name, file_path, music_length, release_year) 
	VALUES ("abf13d72-9ccc-4c85-a52b-b0db16268d5b", "Unbreakable", "~/Music/Unbreakable.mp4", 265, 2015),
	VALUES ("5066bed8-296e-4d53-b027-738822e4a66e", "Lifesize", "~/Music/Lifesize.mp4", 224, 2007);