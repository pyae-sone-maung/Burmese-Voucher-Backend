const express = require('express');
const accountController = require('../controller/account-controller')
const router = express.Router()

router.post('/create', accountController.createAccount)
router.post('/login', accountController.login)
router.patch('/businessinfo/:id', accountController.updateBusinessInfo)
router.patch('/account/:id', accountController.updateAccount)

module.exports = router