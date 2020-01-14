var express = require('express');
var http = require('http');

var port = process.argv[2];
var app = express();

// Set static files
app.use(express.static(__dirname + '/public'));

// Reroute / to splash.html
app.get('/', function(req, res) {
	res.sendFile('splash.html', { root: './public/routes' });
});

// Reroute /game to game.html
app.get('/game', function(req, res) {
	// console.log(__dirname + '/public/routes/splash.html');
	res.sendFile('game.html', { root: './public/routes' });
});

//start server
http.createServer(app).listen(port, () => {
	console.log(`The server has started at port: ${port}`);
});
