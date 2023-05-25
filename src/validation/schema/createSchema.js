const Joi = require('joi');

const createSchema = Joi.object({
  beneficiaryAddress: Joi.string().required().length(42),
  totalTokens: Joi.number().required().precision(18),
  claimedTokens: Joi.number().required().precision(18),
  claimableTokens: Joi.number().required().precision(18),
  walletAddress: Joi.string().required().length(42),
  vestingID: Joi.number().integer().required().min(0),
  network: Joi.number().integer().required().positive(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  cliff: Joi.number().integer().required().min(0),
  slice: Joi.number().integer().required().positive(),
  tokenAddress: Joi.string().required(),
  tokenName: Joi.string().required(),
  tokenSymbol: Joi.string().required(),
});

module.exports = { createSchema };
