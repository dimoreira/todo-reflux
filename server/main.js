var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = module.exports = express();

app.set('port', process.env.PORT | 5000);
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(express.static('public'));

/* Routes */
require('./routes.js')(app);

http.createServer(app).listen(app.get('port'), function() {
	console.log("Server listening on port " + app.get('port'));
});
