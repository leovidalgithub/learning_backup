let express = require( 'express' );
let app     = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);

app.use(function(req, res, next) {
  res.header( 'Access-Control-Allow-Origin', '*' );
  res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
  next();
});

app.get( '/', function( req, res, next ) {
		let token = generateToken();
		res.status( 200 ).json( { success : true , token: token } );
})

server.listen(8085, function() {
	console.log( 'Now running on port 8085!' );
});

// GENERATE TOKEN
function generateToken() {
	let charLength = 15;
	let numLength  = 9;
	let charSet    = 'abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ';
	let numSet     = '0123456789';
	let charRetVal = '';
	let numRetVal  = '';
	for (let i = 0, n = charSet.length; i < charLength; ++i) {
		charRetVal += charSet.charAt( Math.floor( Math.random() * n ) );
	};
	for (let i = 0, n = numSet.length; i < numLength; ++i) {
		numRetVal += numSet.charAt( Math.floor( Math.random() * n ) );
	};
	return charRetVal + numRetVal;
};

io.on('connection', function (socket) {
  socket.on('giveMyTokenBack', function (data) {
      let token = generateToken();
      io.to(socket.id).emit( 'socket_response', { success : true , token: token } );
  });
});
