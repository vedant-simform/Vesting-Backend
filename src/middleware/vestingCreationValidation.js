const Joi = require('joi');

const schema = Joi.object({
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

const vestingCreationValidation = (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(403).json({ message: 'Invalid API Call' });
  } else {
    next();
  }
};

module.exports = { vestingCreationValidation };
