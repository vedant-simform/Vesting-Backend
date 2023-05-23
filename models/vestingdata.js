'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class vestingdata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      vestingdata.belongsTo(models.userData, { foreignKey: 'id' });
    }
  }
  vestingdata.init(
    {
      walletAddress: DataTypes.STRING,
      vestingID: DataTypes.INTEGER,
      network: DataTypes.INTEGER,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      cliff: DataTypes.INTEGER,
      slice: DataTypes.INTEGER,
      tokenAddress: DataTypes.STRING,
      tokenName: DataTypes.STRING,
      tokenSymbol: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'vestingdata',
      timestamps: false,
    },
  );

  // userdata.hasOne(vestingdata);
  return vestingdata;
};
