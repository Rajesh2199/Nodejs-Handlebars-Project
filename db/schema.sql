### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) ,
    devoured BOOL DEFAULT false,
	PRIMARY KEY (id)
);
