const { createSchema } = require('../schema/createSchema');

const vestingCreationValidation = (req, res, next) => {
  const { error } = createSchema.validate(req.body, { abortEarly: false });
  if (error) {
    console.log(error);
    return res.status(403).json({ message: 'Invalid API Call' });    
  } else {
    next();
  }
};

module.exports = { vestingCreationValidation };
