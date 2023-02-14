const express = require('express');
const router = express.Router();
const {verificarAuth, verificarAdministrador} = require('./middlewares/autenticacion')
const login = require('./handlers/login.handler');
const user = require('./handlers/user.handler');
const notas = require('./handlers/notas.handler');

// login
router.post('/login', login.login);

// users
router.post('/nuevo-usuario', user.newUserHandler);
router.put('/usuario/:id', [verificarAuth, verificarAdministrador], user.updateUserHAndler);

// notas
router.post('/nueva-nota', [verificarAuth], notas.addNewNota);
router.get('/nota/:id', notas.getNotaById);
router.get('/notas', [verificarAuth], notas.getNotasByUserId);
router.delete('/nota/:id', [verificarAuth], notas.removeNotaById);
router.put('/nota/:id', notas.updateNotaById);

module.exports = router;