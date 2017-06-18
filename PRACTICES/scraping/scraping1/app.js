// var express = require( 'express' );
// var app     = express();

var app     = require( 'express' )();

var fs      = require( 'fs' );
var request = require( 'request' );
var cheerio = require( 'cheerio' );

app.get( '/scrape', function( req, res ) {
	url = 'http://www.imdb.com/title/tt1229340/';
	request( url, function( error, response, html ) {
		console.log(`statusCode = ${response.statusCode}`);
		if( !error && response.statusCode ===  200 ) {
			var $ = cheerio.load(html);
			var title, release, rating;
			var json = { title : "", release : "", rating : "" };

			$( '.title_wrapper' ).filter( function() {
				var data = $( this );
				title = data.find( 'h1' ).text();
				json.title = title.trim();
			});
		json.release = 1938;
		json.rating = '4 stars';
		res.json(json);

		fs.writeFile( 'output.json', JSON.stringify(json, null, 4 ), function( err ) {
			console.log( 'File successfully written! - Check your project directory for the output.json file' );
		});

		}
	})
});

app.listen( '8080', function() {
	console.log( 'Now running on port 8080!' );
});

// exports = module.exports = app;
