var express = require('express');
var app     = express();
var apiNews = require('./routes.js');

app.use('/news', apiNews );

app.listen( process.env.PORT || 8080, function() {
	console.log( 'NewsPaper now running' );
});
