const express = require('express');
const { getclaim } = require('../controllers/getclaim');
const { setclaim } = require('../controllers/setclaim');

const router = new express.Router();

router.post('/claim/:beneficiary/:network', getclaim);
router.put('/claim/:beneficiary/:network', setclaim);

module.exports = router;
