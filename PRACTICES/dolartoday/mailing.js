let nodemailer = require( 'nodemailer' );

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

module.exports = {
    transporter : transporter
};
