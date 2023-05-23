const express = require('express');
const app = express();
require('dotenv').config();
const authentication = require('./routes/authentication');
const vestingCreation = require('./routes/vestingCreation');
const withdrawFunctions = require('./routes/withdrawFunctions');
const claimToken = require('./routes/claimToken');
const port = process.env.PORT;

app.use(express.json());

app.use(authentication);
app.use(vestingCreation);
app.use(claimToken);

app.listen(port, () => {
  console.log('Server running at port:- ', port);
});
