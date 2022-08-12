const express = require('express');
const accountController = require('../controller/account-controller')
const { auth } = require('../middleware/auth')
const router = express.Router()

router.post('/create', accountController.createAccount)
router.post('/login', accountController.login)
router.patch('/businessinfo/:id', auth, accountController.updateBusinessInfo)
router.patch('/account/:id', auth, accountController.updateAccount)

module.exports = router