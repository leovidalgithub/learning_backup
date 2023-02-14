require('dotenv').config();
const express = require('express');
const cors = require('cors');
const history = require('connect-history-api-fallback');
const mysql = require('mysql');
const myconnection = require('express-myconnection');
const routes = require('./API/routes/routes');
const app = express();

app.set('port', process.env.PORT || 3000);

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(myconnection(mysql, {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	port: process.env.DB_PORT,
	database: process.env.DB_DATABASE
}, 'single'));

app.use('/', routes);

app.use(history());

app.listen(app.get('port'), () => {
	console.log('Vue3-node-mysql App listening to port ' + app.get('port') );
})
