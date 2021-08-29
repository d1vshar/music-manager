INSERT INTO music (id, name, file_path, music_length, release_year, cover) VALUES 
("saf9asdf-kdjas832-dasd8329", "Wings", "https://github.com/d1vshar/m/blob/main/yt1s.com%20-%20Birdy%20%20Wings%20Official%20Video.mp3?raw=true", 264, 2013, "https://i.scdn.co/image/ab67616d0000b2736cf816391f4d0c49d481ee1b"),
("saf9asdf-kdjas832-dasd8331", "Demons", "https://github.com/d1vshar/m/blob/main/yt1s.com%20-%20Birdy%20%20Wings%20Official%20Video.mp3?raw=true", 236, 2012, "https://images.genius.com/f505234629c96e699d905f231080ac6d.1000x1000x1.jpg"),
("saf9asdf-e1r2vd32-v2afeq21", "Demons", "https://github.com/d1vshar/m/raw/main/yt1s.com%20-%20Lifesize%20%20A%20Fine%20Frenzy.mp3?raw=true", 224, 2007, "https://lastfm.freetls.fastly.net/i/u/ar0/bccf42a4ba96421e9b44106589cd5608.jpg");

INSERT into genre (id, name) VALUES 
("saf9asdf-kdjas832-lfncals2", "Folk Rock"),
("saf9asdf-kdjas832-lfnc3122","Rock");

INSERT INTO artist (id, name) VALUES 
("saf9asdf-kdjas832-dsadj121", "Birdy"),
("saf9asdf-kdjas832-kfo239nd", "Imagine Dragons"),
("saf9asdf-p2vsd31d-kfo239nd","Allison Sudol");

INSERT INTO playlist (id, name) VALUES
("gwegsads-ssadgfre-ov2ijd3s","Rock"),
("v2oa3sc1-ssadgfre-ov2ijd3s","Folk Rock");

INSERT INTO rel_sung_by (artist_id, music_id, artist_sequence) VALUES
("saf9asdf-kdjas832-dsadj121","saf9asdf-kdjas832-dasd8329", 0),
("saf9asdf-kdjas832-kfo239nd","saf9asdf-kdjas832-dasd8331", 0),
("saf9asdf-p2vsd31d-kfo239nd","saf9asdf-e1r2vd32-v2afeq21", 0);

INSERT INTO rel_belongs_to_genre (genre_id, music_id) VALUES
("saf9asdf-kdjas832-lfncals2","saf9asdf-kdjas832-dasd8329"),
("saf9asdf-kdjas832-lfnc3122","saf9asdf-kdjas832-dasd8329"),
("saf9asdf-kdjas832-lfnc3122","saf9asdf-kdjas832-dasd8331"),
("saf9asdf-kdjas832-lfncals2","saf9asdf-e1r2vd32-v2afeq21");

INSERT INTO rel_part_of_paylist (playlist_id, music_id, track_number) VALUES
("gwegsads-ssadgfre-ov2ijd3s", "saf9asdf-kdjas832-dasd8329", 0),
("gwegsads-ssadgfre-ov2ijd3s", "saf9asdf-kdjas832-dasd8331", 1),
("v2oa3sc1-ssadgfre-ov2ijd3s", "saf9asdf-kdjas832-dasd8329", 0),
("v2oa3sc1-ssadgfre-ov2ijd3s", "saf9asdf-e1r2vd32-v2afeq21", 1);
