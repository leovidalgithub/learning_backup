var express = require( 'express' ),
	app     = express();

app.use( express.static( __dirname + '/bower_components' ));
app.use( express.static( __dirname + '/app' ));
app.use( express.static( __dirname + '/lib' ));

app.listen( 8080, function() {
	console.log( 'Now listening on PORT 8080!' );
});
