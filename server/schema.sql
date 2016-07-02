CREATE DATABASE chat;

USE chat;

CREATE TABLE room(
  P_Id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(P_Id),
  roomname varchar(20)
);

CREATE TABLE users(
  P_Id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(P_Id),
  username varchar(20)
);

CREATE TABLE messages(
  /* Describe your table here.*/
  P_Id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(P_Id),
  username int,
  created_at timestamp,
  message varchar(140),
  roomname int,
  FOREIGN KEY (roomname)
        REFERENCES room(P_id),
  FOREIGN KEY (username)
        REFERENCES users(P_Id)
);
/* Create other tables and define schemas for them here! */


CREATE TABLE friends(
  P_Id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(P_Id),
  username int,
  FOREIGN KEY(username)
        REFERENCES users(P_Id)
);





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

