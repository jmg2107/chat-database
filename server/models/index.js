var db = require('../db');
//var schema = require('server/schema.sql');
var mysql = require('mysql');

var Promise = require('bluebird');

var postAndGetMethods = {
  messages: {
    get: function (callback) {


      var queryString = 'SELECT messages.P_Id, messages.message,\
              users.username, rooms.roomname FROM messages\
              LEFT OUTER JOIN users ON (messages.P_Id=users.P_Id) \
              LEFT OUTER JOIN rooms ON (messages.P_Id=rooms.P_Id)\
              order by messages.P_Id desc';

      db.dbConnection.query(queryString, (err, result) =>{
        if (err) throw err;
        callback(result);
      });
    }, // a function which produces all the messages
    post: function (message) {

      //sources of truth population
      /*****************************/
      //adds user to user table
      var msg = {message: message.message};
      var usr = {username: message.username};
      var rm = {roomname: message.roomname};
      //posts user to users table
      postAndGetMethods.users.post(message);

      //add room to room table
      db.dbConnection.query("SELECT P_Id FROM rooms WHERE roomname = ?", message.roomname, (err, result) => {
        if(err) throw err;
        if(result.length < 1){
          db.dbConnection.query("INSERT INTO rooms SET ?", rm, function(err, result) {
            if (err) throw err;
            console.log(message.roomname);
          });
        }
      });

      //add a message to message table
      var queryStr = 'insert into messages(message, user_Id, room_Id) \
                    value (?, (select P_Id from users where username = ?), \
                    (select P_Id from rooms where roomname = ?))';
      var params = [message.message, message.username, message.roomname];

      db.dbConnection.query(queryStr, params, function(err, result) {
        if (err) throw err;
        console.log(JSON.stringify(msg));
      });



      /*******************************/

    } // a function which can be used to insert a message into the database
  },



  users: {
    // Ditto as above.
    get: function (callback) {
      db.dbConnection.query('SELECT username FROM users', (err, result) =>{
        if (err) throw err;
        callback(result);
      });
    },
    post: function (username) {
      var usr = {username: username.username};
       db.dbConnection.query("SELECT P_Id FROM users WHERE username = ?", username.username, (err, result) => {
        if(err) throw err;
        if(result.length < 1){
          db.dbConnection.query("INSERT INTO users SET ?", usr, function(err, result) {
            if (err) throw err;
            console.log(username.username);
          });
        }
      });




    }
  }
};

// postAndGetMethods.messages.post({username: "connor", roomname: "hello", message: "check"});
// postAndGetMethods.users.get(function(user){
//   console.log("user array is " + JSON.stringify(user));
// });
// postAndGetMethods.messages.get(function(message){
//   console.log("message array is " + JSON.stringify(message));
// });

module.exports = postAndGetMethods;