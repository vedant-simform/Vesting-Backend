const { claimSchema } = require('../schema/claimSchema');

const claimValidation = async (req, res, next) => {

  const { error } = claimSchema.validate(req.params, { abortEarly: false });
  
  if (error) {
    return res.status(403).json({ message: 'Invalid API Call' });
  } else {
    next();
  }
};

module.exports = { claimValidation };
