let express = require( 'express' );
let app     = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get( '/', function( req, res, next ) {
	// setTimeout(function(){
		let token = generateToken();
		res.status( 200 ).json( { success : true , token: token} );
	// },1000);
})

app.listen( '8085', function() {
	console.log( 'Now running on port 8085!' );
});


// GENERATE TOKEN
function generateToken() {
	var charLength = 10,
	numLength      = 7,
	charSet        = 'abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ',
	numSet         = '0123456789',
	charRetVal     = '',
	numRetVal      = '';
	for ( var i = 0, n = charSet.length; i < charLength; ++i ) {
		charRetVal += charSet.charAt( Math.floor( Math.random() * n ) );
	};
	for ( var i = 0, n = numSet.length; i < numLength; ++i ) {
		numRetVal += numSet.charAt( Math.floor( Math.random() * n ) );
	};
	return charRetVal + numRetVal;
};
