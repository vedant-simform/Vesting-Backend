const { vestingdata, userData } = require('../models');

const getclaim = async (req, res) => {
  try {
    const beneficiaryAddress = req.params.beneficiary;
    const network = req.params.network;

    const claimData = await userData.findAll({
      attributes: ['claimedTokens', 'claimableTokens'],
      include: [
        {
          model: vestingdata,
          attributes: [],
          where: { network },
        },
      ],
      where: { beneficiaryAddress },
    });

    res.status(200).json({ claimData });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getclaim };
