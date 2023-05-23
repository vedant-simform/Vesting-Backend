'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vestingdata', {
      vestingNo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      walletAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vestingID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      network: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      cliff: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      slice: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tokenAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tokenName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tokenSymbol: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('vestingdata');
  },
};
