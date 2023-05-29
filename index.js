const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const authentication = require('./src/routes/authentication/authentication');
const vestingCreation = require('./src/routes/createVesting/vestingCreation');
const withdrawFunctions = require('./src/routes/withdraw/withdrawFunctions');
const claimToken = require('./src/routes/claimTokens/claimToken');
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(authentication);
app.use(vestingCreation);
app.use(claimToken);
app.use(withdrawFunctions);

const server = app.listen(port, () => {
  console.log('Server running at port:', port);
});

module.exports = server;