const { sequelize } = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const authorization = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const data = await authentication.findOne({
      where: { beneficiary: decode.address },
    });
    if (!data) {
      return res.status(404).json({ message: 'Autharization Failed' });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid Token' });
  }
};
