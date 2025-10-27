const comicsController = require('../controller/comics');

const router = require('express').Router();

router.get('/', comicsController.getComics);

module.exports = router;