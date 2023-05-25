const Joi = require('joi');

const withdrawSchema = Joi.object({
  amount: Joi.number().precision(18),
  beneficiaryAddress: Joi.string().required().length(42),
  network: Joi.number().integer().required().positive(),
  vestingID: Joi.number().integer().required().min(0),
  getclaimableTokens: Joi.number().precision(18),
});

module.exports = { withdrawSchema };
