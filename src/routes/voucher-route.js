const express = require('express')
const router = express.Router()
const voucherController = require('../controller/voucher-controller')
const { auth } = require('../middleware/auth')

router.get('/view-voucher/:id', auth, voucherController.viewVoucherById)
router.get('/balance-voucher', auth, voucherController.showBalanceVouchers)
router.get('/records-voucher', auth, voucherController.showRecordVouchers)
router.post('/create-voucher', auth, voucherController.createVoucher)
router.post('/search-balance-voucher', auth, voucherController.searchBalanceVoucherByDate)
router.post('/search-record-voucher', auth, voucherController.searchRecordVoucherByDate)
router.patch('/update-voucher/:id', auth, voucherController.updateVoucherById)
router.delete('/delete-voucher/:id', auth, voucherController.deleteVoucherById)

module.exports = router