const express = require('express');
const { login } = require('../../controllers/authentication/login');
const { authorization } = require('../../middleware/authorization');
const router = new express.Router();

router.post('/login', login);

module.exports = router;
