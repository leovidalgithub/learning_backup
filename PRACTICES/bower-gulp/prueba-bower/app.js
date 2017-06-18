var express = require( 'express' ),
	app     = express();

app.set( 'view engine', 'pug' );
app.use( express.static( __dirname + '/bower_components' ));
app.use( express.static( __dirname + '/css' ));

app.listen( 3000, function() {
	console.log( 'Now listening on PORT 3000!' );
});

app.get( '/', function ( req, res ) {

	res.render( 'index', {
		titulo: 'Bower & Pug Demo',
		texto: '¡Generating Pug from Node.JS!'
	});
});
