const express = require('express')
const cors = require('cors')
const accountRoute = require('./src/routes/account-route')
const voucherRoute = require('./src/routes/voucher-route')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use("/", accountRoute)
app.use('/', voucherRoute)
module.exports = app