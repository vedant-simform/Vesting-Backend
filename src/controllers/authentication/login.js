const jwt = require('jsonwebtoken');
require('dotenv').config();
const ethers = require('ethers');

const login = async (req, res) => {
  try {
    const {signedMessage,message,address} = await req.body;
    const signedAddress = ethers.utils.verifyMessage(message,signedMessage);
    if(signedAddress === address){
      const token = jwt.sign({ address }, process.env.SECRET_KEY, {
        expiresIn: '1h',
      });
      res.status(200).json({ token });
    }else{
      res.status(402).json({message:"Authentication Failed"});
    }

    
  } catch (error) {
    console.log(error);
    res.status(422).json({ error });
  }
};

module.exports = { login };
