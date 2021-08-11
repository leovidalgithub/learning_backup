const router = require('express').Router();
const customerController = require('../controllers/customerController');

router.get('/', customerController.list);

module.exports = router;