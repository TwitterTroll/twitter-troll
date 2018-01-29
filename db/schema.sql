##Creates the burgers_db database
CREATE DATABASE tweets_db;
##Switch to the burgers_db
USE DATABASE tweets_db;
##Creates the burges table
CREATE TABLE tweets
(
	id int NOT NULL AUTO_INCREMENT,
	screen_name varchar(255) NOT NULL,
	tweet varchar(255) NOT NULL,
	date TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);



