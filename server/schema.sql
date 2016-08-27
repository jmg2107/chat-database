CREATE DATABASE chat;

USE chat;
/*SOURCES OF TRUTH*/
CREATE TABLE rooms(
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
  message varchar(140),
  user_Id int,
  room_Id int
);

/*JOIN TABLES*/






/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

