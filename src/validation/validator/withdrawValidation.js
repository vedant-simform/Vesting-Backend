const { withdrawSchema } = require('../schema/withdrawSchema');

const withdrawValidation = async (req, res, next) => {
  const { error } = withdrawSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(403).json({ message: 'Invalid API Call' });
  } else {
    next();
  }
};

module.exports = { withdrawValidation };
