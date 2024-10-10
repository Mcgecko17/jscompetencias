const express = require('express');
const router = express.Router();
const resultsController = require('../controllers/resultsController');

router.get('/', resultsController.showResults);

module.exports = router;