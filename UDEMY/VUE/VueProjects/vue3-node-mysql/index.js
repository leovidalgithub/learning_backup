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
	host: "localhost",
	user: "test_user",
	password: "2gYi4!k0",
	port: 3306,
	database: "vue3_node_mysql"
}, 'single'));

app.use('/', routes);

app.use(history());

app.listen(app.get('port'), () => {
	console.log('Vue3-node-mysql App listin to port ' + app.get('port') );
})
