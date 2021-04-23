import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

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

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/nota'));
app.use('/api', require('./routes/user'));
app.use('/api/login', require('./routes/login'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history({
	logger: console.log.bind(console)
}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
	console.log('Example app listening on port'+ app.get('port'));
});