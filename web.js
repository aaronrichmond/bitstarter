var express = require('express');

var app = express.createServer(express.logger());

fs = require('fs')

var content;

fs.readFile('./index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
 
  content = data;
  console.log(content);
});

app.get('/', function(request, response) {
  response.send('Hello World 2!' + content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
