CREATE DATABASE gameofthrones;
USE gameofthrones;

/* Create a table for all your star wars characters */
CREATE TABLE `characters` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`name` VARCHAR( 255 ) NOT NULL,
	`dead` BOOLEAN DEFAULT false,
	/* Set ID as primary key */
	PRIMARY KEY ( `id` )
);