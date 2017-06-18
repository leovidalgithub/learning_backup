var express    = require('express'),
	app        = express(),
	bodyParser = require( 'body-parser'),
	request    = require( 'request' ),
	router     = express.Router();

app.use( express.static( __dirname + '/public' ) );

app.use( bodyParser.urlencoded({ extended: false }))
app.use( bodyParser.json())

app.use( function( req, res, next ) {
	res.header( 'Access-Control-Allow-Origin', '*' ); //res.header("Access-Control-Allow-Origin", "http://localhost");
	res.header( 'Access-Control-Request-Method', '*' );
	res.header( 'Access-Control-Allow-Methods', 'POST, PUT, OPTIONS, DELETE, GET' );
	res.header( 'Access-Control-Allow-Headers', '*' ); // res.header( 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept' );
	next();
});

router.use(function(req, res, next) {
	console.log( req.method, 'API url ' +  req.url );
	next(); 
});

router.get('/asking', function(req, res) {
	request('http://localhost:3000/account?username='+ req.query.username, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(body);
			res.send(body);
		}
	});
	// res.end();
});

router.post('/asking', function(req, res) {
	request('http://cv.leovidal.es', function (error, response, body) {
		if (!error && response.statusCode == 200) {
			res.send(body);
		}
	});
});

app.use('/api', router);

var server = app.listen( process.env.PORT || 8080, function() {
	var port = server.address().port;
	console.log( 'App now running on port', port );
});
