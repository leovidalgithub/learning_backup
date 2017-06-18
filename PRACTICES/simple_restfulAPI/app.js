var express    = require( 'express' ),
    bodyParser = require( 'body-parser'),
    app        = express();

app.use( bodyParser.json());
app.use( bodyParser.urlencoded({ extended: true }));

require( './routes/routes.js' )(app);

var server = app.listen( 3000, function () {
	console.log("Listening on port %s...", server.address().port);
});

// module.exports = app;
// require( './routes/routes.js' );
