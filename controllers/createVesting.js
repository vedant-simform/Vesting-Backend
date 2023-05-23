const { sequelize } = require('../models');
const vestingdata = sequelize.models.vestingdata;
const userData = sequelize.models.userData;

const createVesting = async (req, res) => {
  try {
    const {
      beneficiaryAddress,
      totalTokens,
      claimedTokens,
      claimableTokens,
      walletAddress,
      vestingID,
      network,
      startDate,
      endDate,
      cliff,
      slice,
      tokenAddress,
      tokenName,
      tokenSymbol,
    } = await req.body;
    const insertedData = await userData.create({
      beneficiaryAddress,
      totalTokens,
      claimedTokens,
      claimableTokens,
    });
    await vestingdata.create({
      id: insertedData.id,
      walletAddress,
      vestingID,
      network,
      startDate,
      endDate,
      cliff,
      slice,
      tokenAddress,
      tokenName,
      tokenSymbol,
    });

    res.status(200).json({ message: 'Data added Sucessfully' });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: 'Internal Server Error' });
  }

  //   console.log(vestingdata);
};

module.exports = { createVesting };
