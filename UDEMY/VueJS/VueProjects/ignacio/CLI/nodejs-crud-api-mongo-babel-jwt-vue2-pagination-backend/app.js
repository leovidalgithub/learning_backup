const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const history = require('connect-history-api-fallback');
const app = express();

app.set('port', process.env.PORT || 3000);

// Conexion a DB
const mongoose = require('mongoose');

// Conexion en la nube
const uri = "mongodb+srv://api-crud-user:KcuUiTJTDusksHk4@api-crud.cmsud.mongodb.net/api-crud?retryWrites=true&w=majority";

const options = {
	useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true
}
mongoose.connect(uri, options).then(
	() => { console.log('Conectado a mongoDB'); },
	err => { err }
);

// Middlewares
	var fs = require('fs')
	var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
	app.use(morgan('combined', { stream: accessLogStream }))

	// app.use(morgan('tiny'));
	// app.use(morgan('short'));
	// app.use(morgan('dev'));
	// app.use(morgan('combined'));
	app.use(cors());
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

// Routes
	app.use('/api', require('./router'));

// Middleware para Vue.js router modo history
app.use(history({
	logger: console.log.bind(console)
}));

// app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
	console.log('Example app listening on port '+ app.get('port'));
});