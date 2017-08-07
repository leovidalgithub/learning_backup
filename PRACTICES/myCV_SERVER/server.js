var express    = require( 'express' ),
    bodyParser = require( 'body-parser'),
    app        = express();

app.use(express.static('public'));

app.use( bodyParser.json());
app.use( bodyParser.urlencoded({ extended: true }));

app.get('/cc/:id', function(req,res,next){
    let id = req.params.id;
    let myVar = req.query.var;
    res.json({ data:'Hello there!' + id + myVar });
});

app.listen( 8080, function () {
	console.log('Listening on port 8080');
});
