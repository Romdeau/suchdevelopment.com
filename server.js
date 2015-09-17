//Set variables for node app ==================
var express = require('express');
var app = express();
var config = require('./config');
var path 	   = require('path');

// set static files location
// used for requests that our frontend will make
app.use(express.static(__dirname + '/public'));

//get resume page
app.get('/resume', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/views/resume.html'));
});

//catchall to pass to angular app===============
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

// START THE SERVER ============================
app.listen(config.port);
console.log('Server Running On ' + config.port);
