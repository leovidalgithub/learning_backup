const jwt = require('jsonwebtoken');

const verificarAuthToken = (req, res, next) => {
	const token = req.get('token'); //  req.headers.token;

	jwt.verify(token, 'secret', (err, decoded) => {
		if(err) {
			return res.status(401).json({
				mensaje: 'Invalid Token'
			})
		} else {
			req.usuario = decoded.data;
			next();
		}
	})
};

// middleware only ADMIN users are allowed
const verificarAdministrador = (req, res, next) => {
	const rol = req.usuario.role;

	if(rol === 'ADMIN') {
		next();
	} else {
		return res.status(400).json({
			mensaje: 'User must be ADMIN'
		})
	}
};

module.exports = {verificarAuth: verificarAuthToken, verificarAdministrador};