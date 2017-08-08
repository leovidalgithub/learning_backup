var express    = require( 'express' ),
    bodyParser = require( 'body-parser'),
    app        = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static('public'));

app.use( bodyParser.json());
app.use( bodyParser.urlencoded({ extended: true }));

app.get('/cc',function(req,res,next){
    res.send('Hello! my partner');
});

let server = app.listen( 8080, function () {
    let port = server.address().port;
	console.log('Listening at port %s', port);
});
