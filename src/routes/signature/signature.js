const express = require('express');
const signature = require('../../controllers/signature/signature');
const router = new express.Router();


router.get('/signature',signature);

module.exports = router;