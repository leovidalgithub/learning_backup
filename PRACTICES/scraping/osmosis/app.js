const express = require('express');
const osmosis = require('osmosis');
const app     = express();

// osmosis
//     .get('www.google.com')
//     .set({'Title': 'title'})
//     .data(console.log);

osmosis
    .get('https://www.google.co.in/search?q=analytics')
    .find('#botstuff')
    .set({'related': ['.card-section .brs_col p a']})
    .data(function(data) {
        console.log(data);
    })

// app.listen( process.env.PORT || 8080, function() {
// 	console.log( 'Osmosis is now running on port 8080' );
// });
