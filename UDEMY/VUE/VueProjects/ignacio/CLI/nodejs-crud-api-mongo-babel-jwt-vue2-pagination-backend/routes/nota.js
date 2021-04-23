import express from 'express';
const router = express.Router();
import Nota from '../models/nota';
const {verificarAuth} = require('../middlewares/autenticacion')

// adding new Nota
router.post('/nueva-nota', verificarAuth, async(req, res) => {
	const body = req.body;

	// this usuarioId comes from verificarAuth --> req.usuario = decoded.data;
	body.usuarioId = req.usuario._id;

	try {
		const notaDB = await Nota.create(body);
		res.status(200).json(notaDB);
	} catch (error) {
		return res.status(500).json({
			mensaje: 'Ocurrio un error',
			error
		})
	}
});

// get Nota by Id
router.get('/nota/:id', async(req, res) => {
	const _id = req.params.id;
	try {
		const notaDB = await Nota.findOne({_id});
		res.json(notaDB);
	} catch (error) {
		return res.status(400).json({
			mensaje: 'Ocurrio un error',
			error
		})
	}
});

// get all Notas by user Id using pagination
router.get('/nota', verificarAuth, async(req, res) => {
	const usuarioId = req.usuario._id;
	const queryLimit = Number(req.query.limit) || 5;
	const querySkip = Number(req.query.skip) || 0;

	try {
		const notaDb = await Nota.find({usuarioId}).skip(querySkip).limit(queryLimit);
		const totalNotas = await Nota.find({usuarioId}).countDocuments();
		res.json({notaDb, totalNotas});
	} catch (error) {
		return res.status(400).json({
			mensaje: 'Ocurrio un error',
			error
		})
	}
});

// delete Nota by Id
router.delete('/nota/:id', async(req, res) => {
	const _id = req.params.id;
	try {
		const notaDb = await Nota.findByIdAndDelete({_id});
		if(!notaDb) {
		return res.status(400).json({
			mensaje: 'No se encontró el id indicado',
			error
		})
		}
		res.json(notaDb);
	} catch (error) {
		return res.status(400).json({
			mensaje: 'Ocurrio un error',
			error
		})
	}
});

// update Nota by Id
router.put('/nota/:id', async(req, res) => {
	const _id = req.params.id;
	const body = req.body;
	try {
		const notaDb = await Nota.findByIdAndUpdate(
		_id,
		body,
		{new: true});
		res.json(notaDb);
	} catch (error) {
		return res.status(400).json({
			mensaje: 'Ocurrio un error',
			error
		})
	}
});

module.exports = router;