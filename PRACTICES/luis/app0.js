let express = require( 'express' );
let app     = express();

app.get( '/', function( req, res, next ) {
	res.send('Done from server!');
})

app.listen( '8085', function() {
	console.log( 'Now running on port 8085!' );
});
