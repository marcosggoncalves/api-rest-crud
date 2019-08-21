const router = require('express').Router();
const controllerIndex = require('../controllers/index');

router.get('/',controllerIndex.index);

module.exports 	= router;
