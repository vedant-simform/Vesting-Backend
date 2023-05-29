const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = async (req, res) => {
  try {
    const { address } = await req.body;
    const token = jwt.sign({ address }, process.env.SECRET_KEY, {
      expiresIn: '1h',
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(422).json({ error });
  }
};

module.exports = { login };
