var models = require('../models');
var express = require('express');

// //Express server
// app.get('/', function(request, response, next){
//   if(request.url !== '/'){
//     response.status(404).end();
//   }
//   var message = handleRequest.gatherData();
//   response.set(defaultCorsHeaders);
//   response.status(200).send(message);
// });
// app.use(bodyParser.json());
// app.post('/', upload.array(), function(request, response, next){
//   //var errorMes = JSON.stringify(request.body);
//   //console.log("request body is " + errorMes);
//   response.set(defaultCorsHeaders);
//   handleRequest.expandData(request.body);
//   response.status(201).end();
// });
// app.options('/', function(request, response, next){
//   response.set(defaultCorsHeaders);
//   response.status(200).end();
// });

// app.listen(port, ip);
var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "application/JSON"
};


module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {

      //json object
        //username
        //timestamp
        //roomname
        //message
      //obj = JSON.parse(obj);
      //obj.txt
      console.log("POST body is " + req.body);
      models.messages.post(req.body);

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {

      models.users.post(req.body.username);
      //TODO handle response

      res.set(defaultCorsHeaders);
      res.status(201).end();
    }
  }
};

