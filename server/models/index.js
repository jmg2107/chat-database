var db = require('../db');
//var schema = require('server/schema.sql');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (message) {
      console.log(JSON.stringify(message));
      //username
        //roomname
        //message
    //create the local vars to hold UID and roomID
    var uID, roomID;
    //check for user in users table, if not there push to the table
    db.dbConnection.query('SELECT P_Id FROM users WHERE username = (?)', message.username, (err, result) => {
      if(err) throw err;
      uID = result;
      console.log(uID);
    });
    //grab the UID from the users table (query)
    //check for room in room table, if not there push to the table
    //grab the roomID from the room table {query}

    //insert the uid, timestamp, roomname, message into the
    //messages table (query)



      // db.dbConnection.query('INSERT INTO users () values ?', username, function(err, result) {
      //   if (err) throw err;
      //   console.log(result);
      //   });


    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username) {
      console.log(username);
      // INSERT INTO users (username) values ('connor');  'Valjean' = ?

      db.dbConnection.query('SELECT P_Id FROM users WHERE username = (?)', username, (err, result) => {
        if(err) throw err;
        if(! result.length > 0){
          db.dbConnection.query('INSERT INTO users (username) values (?)', username, function(err, result) {
            if (err) throw err;
            console.log(result);
          });
        }
      });


    }
  }
};

