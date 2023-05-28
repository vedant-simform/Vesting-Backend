const { expect } = require('chai');
const config = require('../../config/config.json');
const { execSync } = require('child_process');
const { vestingdata, userData, Sequelize } = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const sequelize = new Sequelize(
  config.test.database,
  config.test.username,
  config.test.password,
  {
    host: config.test.host,
    dialect: config.test.dialect,
  },
);

describe('Back-end Testing', async () => {
  before(async () => {
    execSync('npx sequelize-cli db:migrate --env test', {
      stdio: 'inherit',
    });
  });

  beforeEach(async () => {
    await sequelize.sync({ force: true });
    await sequelize.authenticate();
  });
  it('Claim Tokens', async () => {
    const address = '0xcc1190D3Aad29b3E29FD435B793A830e8ccFE464';
    const token = jwt.sign({ address }, process.env.SECRET_KEY);
    const response = await fetch(
      'http://localhost:5000/claim/0xcc1190D3Aad29b3E29FD435B793A830e8ccFE464/80001/0',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const claimData = await response.json();

    expect(response.status).to.equal(200);
    expect(claimData).to.be.an('object');
    expect(claimData.response.claimedTokens).to.equal(
      Number(0).toPrecision(19),
    );
  });
  it('Database Entry', async () => {
    const address = '0xcc1190D3Aad29b3E29FD435B793A830e8ccFE464';
    const token = jwt.sign({ address }, process.env.SECRET_KEY);
    const apiBody = {
      beneficiaryAddress: '0xcc1190D3Aad29b3E29FD435B793A830e8ccFE464',
      totalTokens: 2.364824,
      claimedTokens: 0,
      claimableTokens: 0,
      walletAddress: address,
      vestingID: 0,
      network: 80001,
      startDate: 16 / 05 / 2023,
      endDate: 17 / 05 / 2023,
      cliff: 0,
      slice: 0,
      tokenAddress: '0x25dcF0D3Aad29b3E29FD435B793A830e8ccFE464',
      tokenName: 'test coin',
      tokenSymbol: 'TVDS',
    };
    try {
      await fetch('http://localhost:5000/createVesting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(apiBody),
      });
    } catch (error) {}
  });
  it('withdraw functionality', async () => {});
});
