var https = require('https'),
  express = require('express'),
  fs = require('fs');

var options = {
	key: fs.readFileSync('key.pem'),
	cert: fs.readFileSync('cert.pem')
};

var port = 8000;
var app = express();

app.use(express.static('public'));

https.createServer(options, app).listen(port, function(){
  console.log("Https server listening on port : " + port);
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/call.js', function (req, res) {
  res.sendFile(__dirname + '/call.js');
});

app.get('/PeerConnection.js', function (req, res) {
  res.sendFile(__dirname + '/PeerConnection.js');
});
