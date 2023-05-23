'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      beneficiaryAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      totalTokens: {
        type: Sequelize.DECIMAL(38, 18),
        allowNull: false,
      },
      claimedTokens: {
        type: Sequelize.DECIMAL(38, 18),
        allowNull: false,
      },
      claimableTokens: {
        type: Sequelize.DECIMAL(38, 18),
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('userData');
  },
};
