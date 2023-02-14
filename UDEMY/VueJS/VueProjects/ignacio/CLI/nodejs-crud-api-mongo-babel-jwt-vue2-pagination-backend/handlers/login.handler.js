const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
// const saltRounds = 10;

exports.login = async(req, res) => {
	const body = req.body;

	try {
		// Evaluando el email
		const usuarioDB = await User.findOne({email: body.email})
		if(!usuarioDB) {
			return res.status(400).json({
				mensaje: 'Email no encontrado'
			})
		}

		// Evaluar la contraseña
		if(!bcrypt.compareSync(body.pass, usuarioDB.pass)) {
			return res.status(400).json({
				mensaje: 'Contraseña incorrecta'
			})
		}

		// Generar token
		const token = jwt.sign({
			data: usuarioDB
		}, 'secret', { expiresIn: 60 * 60 * 24 * 30 });

		res.status(200).json({
			usuarioDB,
			token
		})
	} catch (error) {
		return res.status(400).json({
		mensaje: 'Ocurrió un error',
		error
		})
	}
}