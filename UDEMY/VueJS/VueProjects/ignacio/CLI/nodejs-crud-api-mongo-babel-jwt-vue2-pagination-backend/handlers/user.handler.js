const User = require('../models/user.model');
const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const _ = require('lodash');

// adding user
const newUserHandler = async(req, res) => {
	const body = {
		nombre: req.body.nombre,
		email: req.body.email,
		role: req.body.role
	}
	body.pass = bcrypt.hashSync(req.body.pass, saltRounds);
	try {
		const usuarioDB = await User.create(body);
		res.json(usuarioDB);
	} catch (error) {
		return res.status(500).json({
		mensaje: 'Ocurrió un error',
		error
		})
	}
};

// updating user
const updateUserHAndler = async(req, res) => {
	const _id = req.params.id;

	// letting pass only 'nombre', 'email', 'pass', 'activo'
	const body = _.pick(req.body, ['nombre', 'email', 'pass', 'activo']);

	if(body.pass) {
		body.pass = bcrypt.hashSync(req.body.pass, saltRounds);
	}
	try {
		const usuarioDB = await User.findByIdAndUpdate(
			_id,
			body,
			{ new: true, runValidators: true, context: 'query' }
		)
		return res.json(usuarioDB);
	} catch (error) {
		return res.status(400).json({
			mensaje: 'Ocurrió un error---',
			error
		})
	}
};

module.exports = {newUserHandler, updateUserHAndler};

