const express = require('express');
const { getclaim } = require('../controllers/getclaim');

const router = new express.Router();

router.post('/claim/:beneficiary/:network/:vestingID', getclaim);

module.exports = router;
