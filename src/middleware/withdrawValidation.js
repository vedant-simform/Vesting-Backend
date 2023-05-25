const Joi = require('joi');

const schema = Joi.object({
  amount: Joi.number().precision(18),
  beneficiaryAddress: Joi.string().required().length(42),
  network: Joi.number().integer().required().positive(),
  vestingID: Joi.number().integer().required().min(0),
  getclaimableTokens: Joi.number().precision(18),
});

const withdrawValidation = async (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(403).json({ message: 'Invalid API Call' });
  } else {
    next();
  }
};

module.exports = { withdrawValidation };
