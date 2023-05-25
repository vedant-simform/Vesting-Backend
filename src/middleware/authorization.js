const { vestingdata, userData } = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const authorization = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decode.address;
    next();
  } catch (error) {
    console.log('error');
    res.status(401).json({ message: 'Invalid Token' });
  }
};

module.exports = { authorization };
