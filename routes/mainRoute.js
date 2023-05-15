const express = require('express');
const router = express();

mainController = require('../controllers/mainController');

router.get('/', mainController.home);





module.exports = router;