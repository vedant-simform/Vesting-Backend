const { Decimal } = require('decimal.js');
const { vestingdata, userData } = require('../../models');

const withdraw = async (req, res) => {
  const { amount, beneficiaryAddress, network, vestingID, getclaimableTokens } =
    req.body;

  try {
    if (req.user == beneficiaryAddress) {
      const userDetails = await userData.findOne({
        attributes: ['claimedTokens', 'claimableTokens', 'id'],
        include: [
          {
            model: vestingdata,
            attributes: [],
            where: { network, vestingID },
          },
        ],
        where: { beneficiaryAddress },
      });

      const claimedTokens = new Decimal(userDetails.claimedTokens);
      const claimableTokens = new Decimal(getclaimableTokens);

      const updatedClaimedTokens = claimedTokens.plus(amount);
      const updatedClaimableTokens = claimableTokens.minus(amount);

      await userData.update(
        {
          claimedTokens: updatedClaimedTokens.toString(),
          claimableTokens: updatedClaimableTokens.toString(),
        },
        {
          where: { beneficiaryAddress, id: userDetails.id },
        },
      );

      res.status(200).json({ message: 'Data Updated Successfully' });
    } else {
      res.status(401).json({ message: 'Unauthorized user' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { withdraw };
