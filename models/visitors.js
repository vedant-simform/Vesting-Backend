'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class visitors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  visitors.init({
    address: DataTypes.STRING,
    nonce: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'visitors',
    timestamps:false
  });
  return visitors;
};