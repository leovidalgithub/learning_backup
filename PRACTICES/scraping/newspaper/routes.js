var express = require( 'express' );
var app     = express();
var router  = express.Router();
// var request = require( 'request' );
var rp = require( 'request-promise' );
var cheerio = require( 'cheerio' );

router.use( '/', function( req, res, next) {
	console.log( 'Middleware - request router.use /news' );
	next();
});

router.get( '/globo', function( req, res ) {
	url = 'http://globovision.com/tecnologia/';
	rp( url )
		.then( function( htmlString ) {
			ready(res, htmlString );
		})
		.catch( function( err ) {
		});
	// request( url, function( error, response, html ) {
	// 	if(!error){
	// 		var $ = cheerio.load(html);
	// // $('.title_wrapper').filter(function(){
	// // 		   var data = $(this);
	// // 		   title = data.find('h1').text();
	// // 		   json.title = title.trim();
	// // 		   // res.send(json.title);
	// // });
	// // json.release = 1938;
	// // json.rating = '4 stars';
	// // res.json(json);
	// 	};
	// });
});

function ready( res, html ) {
	var $ = cheerio.load( html );

	// res.write('<p>epa<br>');
	// res.write('epa</p>');
	// res.write('epa');
	// res.write('epa');
	var result = '';
		$( '.article' ).filter( function() {
		var data = $( this );
		var title = data.find( '.title' ).text();
		result += '<hr>';
		result += title;
		// title = data.find('h1').text();
		// json.title = title.trim();
		// res.send(json.title);
	});

	res.send( result );
	// res.end();
};

module.exports = router;
