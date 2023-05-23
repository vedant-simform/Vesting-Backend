const express = require('express');
const { createVesting } = require('../controllers/createVesting');
const router = new express.Router();

router.post('/createVesting', createVesting);

module.exports = router;
