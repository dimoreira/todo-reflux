module.exports = function(app) {
	
	app.get('*', function(req, res) {
		var indexFile = __dirname + '../public/index.html';
		res.sendFile(indexFile);
	});

};
