var http = require('http');
var fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.get('/', function(req,res){
  res.cookie('state', 0);
  res.send('Hello express');
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example listening on http://%s:%s', host,port);
});
/*
var port = 8009;
http.createServer(function(req,res){
  var testFileContents;
  try{
    fs.readFile('/home/person/Desktop/freelancing/chatroom/setusername.html', function(err,data){
      try{
        if (err) throw err;

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      }
      catch(err){
        console.log('Could not open file test.html');
      }
    });
  }
  catch(err){
    console.log('Error, could not open setusername.html');
  }

}).listen(port);
*/
