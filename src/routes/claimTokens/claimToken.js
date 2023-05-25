const express = require('express');
const { getclaim } = require('../../controllers/claimTokens/getclaim');
const { authorization } = require('../../middleware/authorization');
const {
  claimValidation,
} = require('../../validation/validator/claimValidation');

const router = new express.Router();

router.post(
  '/claim/:beneficiary/:network/:vestingID',
  claimValidation,
  authorization,
  getclaim,
);

module.exports = router;
