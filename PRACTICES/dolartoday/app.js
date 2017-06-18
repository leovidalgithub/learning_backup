let express = require( 'express' );
let app     = express();
let request = require( 'request' );
let pug     = require( 'pug' );
let url     = 'https://s3.amazonaws.com/dolartoday/data.json';

app.use( express.static( 'public' ) );
app.set( 'view engine', 'pug' );

app.get( '/', function( req, res, next ) {
	getData()
		.then( function( json ) {
			res.render( 'index', { success : true, json : json } );
		})
		.catch( function() {
			res.render( 'index', { success : false, json : null } );
		});
})

function getData() {
	return new Promise( function( resolve, reject ) {
		request( url, function( error, response, data ) {
			if( !error && response.statusCode ===  200 ) { // oh! this is great
				var data = JSON.parse( data );
				let json = {
					dolar : parseInt( data.USD.transferencia, 10 ),
					euro  : parseInt( data.EUR.transferencia )
				};
				resolve( json );
			} else { // ups! some error occurs or not data available
				reject();
			}
		})
	})
}

// ******************************** SEND EMAIL ********************************
let transporter = require( './mailing' ).transporter;
function sendThisMail( data ) {
	let mailOptions = {
	        from    : 'webmaster@sipedi.net',
	        to      : 'leo@leovidal.es',
	        subject : 'Dolar Today',
			html    : '<h2>Dolar Today</h2><p>US$ ' + data.dolar + '</p><p>EUR ' + data.euro + '</p>'
	};
	transporter.sendMail( mailOptions, function( error, info ) {});
}
// setInterval( function() {
// 	getData()
// 		.then( function( json ) {
// 			sendThisMail( json );
// 		})
// }, 1200000 ) // every 20 minutes
// ******************************** SEND EMAIL ********************************

app.listen( '8080', function() {
	console.log( 'Now running on port 8080!' );
});
