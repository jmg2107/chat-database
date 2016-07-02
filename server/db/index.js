var mysql = require('mysql');
var fs = require('fs');


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

//mysql -u 'root' -p < './server/schema.sql';


exports.dbConnection = mysql.createConnection({
      user: 'root',
      password: 'a',
      database: 'chat',
      //fs.readFile('./server/schema.sql')

    });
exports.dbConnection.connect();

