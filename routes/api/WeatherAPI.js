const express = require('express');
const router = express.Router();

const weatherCTRL = require('../../controllers/api/weather');

router.get('/', weatherCTRL.index);


module.exports = router;