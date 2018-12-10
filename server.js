var http = require('http');
var fs = require('fs');
var bodyParser = require("body-parser");
var session = require('express-session');
var express = require('express');
const flash = require('connect-flash');
var request = require('request');
var path = require('path');
// Require express and create an instance of it
var app = express();

app.use(express.static('.'));

app.use(bodyParser.urlencoded({
 extended: false
}));
app.use(bodyParser.json());

app.use(flash());

// define the port of access for your server
const PORT = 8080;

app.listen(PORT, function() {
 console.log('dogdriver is listening on http://0.0.0.0:' + PORT);
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});


/////////////////////
/// Handles interaction with debug files
/////////////////////

var data = [];

getLogData().then(function(response) {
  //console.log(response)
});

setInterval(function() {
  getLogData().then(function(response) {
  });
}, 10000);


function getLogData() {
  return new Promise(function(resolve, reject) {


    console.log("THIS IS THE DATA")
    console.log(data)



  });
}
