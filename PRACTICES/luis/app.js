let express     = require( 'express' );
let app         = express();
let request     = require('request');
let rp          = require('request-promise');
let url         = 'http://localhost:8085';
let allPromises = [];

app.use( '/', function( req,res,next){
	console.log('\033c');
	next();
});

app.get( '/', function( req, res, next ) {
	let num = req.query.num;
	let begin = Date.now();
	console.log(`Starting... ${num} requests`);

	for( let cont = 1;cont <= num; cont++ ) {
		allPromises.push(rp({method: 'GET', uri:url}));
	}

	Promise.all(allPromises)
		.then(function(data){
			console.log('****************');
			let end= Date.now();
			let timeSpent = ( end - begin ) / 1000 + ' segs.';
			console.log( 'Tiempo invertido = ' + timeSpent );

			let result = `<h1>Requests GET</h1>
			<h2>Number of requests: ${num}</h2>
			<h3>Time spent: <code>${timeSpent}</code></h3>`;
			res.send(result);
		});
});

app.get( '/recur/:num', function( req, res, next ) {
	let num = req.params.num;
	let cont = 0;
	let globalTime = Date.now();
	let average = 0;
	let output = '';

	recur();
	function recur() {
		let begin = Date.now();
		request.get(url, function(error, response, body) {
			if( response.statusCode === 200 ) {
				body = JSON.parse(body);
				console.log(body.token);
				if ( body.success ) {
					let end= Date.now();
					let timeSpent = ( end - begin );
					average += ( end - begin );
					let out = 'Req ' + ++cont + ' / ' + timeSpent + ' milli / ' + timeSpent / 1000 + 's';
					console.log(out);
					output += '<p><code>' + out + '</code></p>'
					if(cont >= num) {
						let globalTimeEnd= Date.now();
						let globalTimeSpent = ( globalTimeEnd - globalTime );
						let outGlobal = 'Global time = ' + globalTimeSpent + ' milli / ' + globalTimeSpent / 1000 + 's' ;
						let outAverage = 'Average = ' + average / num + ' milli';
						console.log('***************');
						console.log(outGlobal);
						console.log(outAverage);
						output += '<h3>*******************************</h3>'
						output += '<h3>' + outGlobal + '</h3>'
						output += '<h3>' + outAverage + '</h3>'
						res.send(output);
						return;
					}
					recur();
				}
			}
		});
	}
});

app.listen( '8080', function() {
	console.log( 'Now running on port 8080!' );
});





// function recur() {
// 	request.get(url, function(error, response, body) {
// 		if(response) {
// 			recur();
// 		}
// 	});
// }
