'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      userData.hasOne(models.vestingdata, { foreignKey: 'id' });
    }
  }
  userData.init(
    {
      beneficiaryAddress: DataTypes.STRING,
      totalTokens: DataTypes.DECIMAL(38, 18),
      claimedTokens: DataTypes.DECIMAL(38, 18),
      claimableTokens: DataTypes.DECIMAL(38, 18),
    },
    {
      sequelize,
      modelName: 'userData',
      timestamps: false,
    },
  );
  return userData;
};
