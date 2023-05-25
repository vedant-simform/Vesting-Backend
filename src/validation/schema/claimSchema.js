const Joi = require('joi');

const claimSchema = Joi.object({
  beneficiary: Joi.string().required().length(42),
  network: Joi.number().integer().required().positive(),
  vestingID: Joi.number().integer().required().min(0),
});

module.exports = { claimSchema };
