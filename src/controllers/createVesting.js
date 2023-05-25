const { sequelize } = require('../../models');
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

    if (req.user == walletAddress) {
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
    } else {
      res.status(401).json({ message: 'Unauthorized user' });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json({ error });
  }

  //   console.log(vestingdata);
};

module.exports = { createVesting };