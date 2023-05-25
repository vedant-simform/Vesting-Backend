const express = require('express');
const {
  createVesting,
} = require('../../controllers/createVesting/createVesting');

const { authorization } = require('../../middleware/authorization');
const {
  vestingCreationValidation,
} = require('../../validation/validator/vestingCreationValidation');
const router = new express.Router();

router.post(
  '/createVesting',
  vestingCreationValidation,
  authorization,
  createVesting,
);

module.exports = router;
