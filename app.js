var http = require('http');
var fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);


var app = express();

app.use(
  session(
    {
      secret: 'test',
      resave: 'false',
      saveUninitialized: 'false',
      store: new MongoStore(
        {
          url:"mongodb://localhost/test"
        }
      )
    }
  )
);


app.get('/', function(req,res){
  console.log(req.session);
  req.session.a = 108;
  res.send('Hello express');
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example listening on http://%s:%s', host,port);
});




