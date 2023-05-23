const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = async (req, res) => {
  const { address } = await req.body;
  const token = jwt.sign({ address }, process.env.SECRET_KEY, {
    expiresIn: '1h',
  });
  res.json(token);
};

module.exports = { login };
