const express = require('express');
const { withdraw } = require('../controllers/withdraw');
const router = new express.Router();

router.put('/withdraw', withdraw);

module.exports = router;
