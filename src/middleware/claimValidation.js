const Joi = require('joi');

const claimValidation = async (req, res, next) => {
  const schema = Joi.object({
    beneficiary: Joi.string().required().length(42),
    network: Joi.number().integer().required().positive(),
    vestingID: Joi.number().integer().required().min(0),
  });

  const { error } = schema.validate(req.params, { abortEarly: false });

  if (error) {
    return res.status(403).json({ message: 'Invalid API Call' });
  } else {
    next();
  }
};

module.exports = { claimValidation };
