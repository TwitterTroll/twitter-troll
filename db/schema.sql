CREATE DATABASE tweets_db;

USE DATABASE tweets_db;

CREATE TABLE tweets
(
	id int NOT NULL AUTO_INCREMENT,
	screen_name varchar(255) NOT NULL,
	tweet varchar(255) NOT NULL,
	date TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);



