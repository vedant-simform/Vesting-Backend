const { vestingdata, userData } = require('../models');

const setclaim = async (req, res) => {
  try {
    const beneficiaryAddress = req.params.beneficiary;
    const network = req.params.network;

    const setclaim = await userData.findAll({
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

    res.status(200).json({ setclaim });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { setclaim };
