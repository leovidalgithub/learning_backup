let express     = require( 'express' );
let app         = express();
let rp          = require('request-promise');
let url         = 'http://localhost:8085';
let allPromises = [];

app.get( '/', function( req, res, next ) {
	let num = req.query.num;
	let begin = Date.now();
	console.log('Starting...');

	for( let cont = 1;cont <= num; cont++ ) {
		allPromises.push(rp({method: 'GET', uri:url}));
	}

	Promise.all(allPromises)
		.then(function(data){
			console.log('****************');
			console.log(`Number of requests ${num}`);
			let end= Date.now();
			let timeSpent = ( end - begin ) / 1000 + 'secs';
			console.log( timeSpent );

			let result = `<h1>Requests GET</h1>
			<h2>Número de peticiones: ${num}</h2>
			<h3>Tiempo empleado: <code>${timeSpent}</code></h3>`;
			res.send(result);
		});
})

app.listen( '8080', function() {
	console.log( 'Now running on port 8080!' );
});
