const { vestingdata, userData } = require('../models');

const getclaim = async (req, res) => {
  try {
    const beneficiaryAddress = req.params.beneficiary;
    const network = req.params.network;
    const vestingID = req.params.vestingID;

    const response = await userData.findOne({
      attributes: ['claimedTokens', 'claimableTokens'],
      include: [
        {
          model: vestingdata,
          attributes: ['vestingID'],
          where: { network, vestingID },
        },
      ],
      where: { beneficiaryAddress },
    });

    res.status(200).json({ response });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getclaim };
