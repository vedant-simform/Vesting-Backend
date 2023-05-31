const crypto = require('crypto');


const signature = async(req,res)=>{
    try {
        const nonce = crypto.randomBytes(32).toString('hex');
    res.status(200).json({nonce});
    } catch (error) {
    res.status(401).json({error});
    }
    
}

module.exports = signature;