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
 
  beforeEach(async () => {
    execSync('npx sequelize-cli db:migrate --env test', {
      stdio: 'inherit',
    });
    await sequelize.sync({ force: true });
    await sequelize.authenticate();
  });
  it('Claim Tokens', async () => {
    const address = '0xcc1190D3Aad29b3E29FD435B793A830e8ccFE464';
    const token =  jwt.sign(
        {address},
      process.env.SECRET_KEY,
    );
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
    expect(claimData.response.claimedTokens).to.equal(Number(0).toPrecision(19));

  });
  it("Database Entry",async()=>{
    const address = '0xcc1190D3Aad29b3E29FD435B793A830e8ccFE464';
    const token =  jwt.sign(
        {address},
      process.env.SECRET_KEY,
    );
    const response = await fetch('http://localhost:5000/withdrawFunctions',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            Authorization:`Bearer ${token}`
        },
        body:{
            
        }
        
    })
  })
});
