const express = require('express');
const router = express.Router();

const weatherCTRL = require('../../controllers/api/createjournal');

router.get('/', weatherCTRL.index);










module.exports = router;