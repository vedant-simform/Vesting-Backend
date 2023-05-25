const express = require('express');
const { withdraw } = require('../../controllers/withdraw/withdraw');
const { authorization } = require('../../middleware/authorization');
const {
  withdrawValidation,
} = require('../../validation/validator/withdrawValidation');
const router = new express.Router();

router.put('/withdraw', withdrawValidation, authorization, withdraw);

module.exports = router;
