DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
	name TEXT NOT NULL,
	id INTEGER PRIMARY KEY,
	score INTEGER NOT NULL
);