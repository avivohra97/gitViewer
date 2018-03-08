var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, './ang1.html'));
});

app.listen(3000, function() {
	console.log('Connected to port 3000');
});