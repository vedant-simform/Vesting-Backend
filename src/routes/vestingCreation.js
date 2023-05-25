const express = require('express');
const { createVesting } = require('../controllers/createVesting');
const { authorization } = require('../middleware/authorization');
const {
  vestingCreationValidation,
} = require('../middleware/vestingCreationValidation');
const router = new express.Router();

router.post(
  '/createVesting',
  vestingCreationValidation,
  authorization,
  createVesting,
);

module.exports = router;
