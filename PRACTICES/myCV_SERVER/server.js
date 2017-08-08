var express    = require( 'express' ),
    bodyParser = require( 'body-parser'),
    app        = express();
    nodemailer = require( 'nodemailer' );

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static('public'));
app.use( bodyParser.json());
app.use( bodyParser.urlencoded({ extended: true }));

app.post('/contact',function(req,res,next){
    var contactData = req.body;

    sendThisMail(contactData, function( error, info ) {
        if(error) {
            res.status(200).json({success:false,err:err});
        } else {
            console.log('Good');
            res.status(200).json({success:true,data:data});
        }
    });
});

// ************************************ SEND EMAIL ***********************************
function sendThisMail( data, callback ) {
	let mailOptions = {
	        from    : data.email,
	        to      : 'cv@leovidal.es',
	        subject : data.subject,
			html    : `
                <h2>CV FORM</h2>
                <p>Nombre: ${data.name} </p>
                <p>Correo: ${data.email}</p>
                <p>Subject: ${data.subject} </p>
                <p>Mensaje: ${data.msg} </p>
                `
	};
	transporter.sendMail( mailOptions, callback );
}

let transporter = nodemailer.createTransport({
    	host: 'smtp.sipedi.net',
    	port: 465,
    	secure: true, // use SSL
    	auth: {
    		user: 'webmaster@sipedi.net',
    		pass: 'Kcvq3VvrkaN9fW3DJ6'
    	},
    	tls: {
    		rejectUnauthorized: false // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    	}
});


// ********************* ********************* ********************* *********************
let server = app.listen( 8080, function () {
    let port = server.address().port;
	console.log('Listening at port %s', port);
});
