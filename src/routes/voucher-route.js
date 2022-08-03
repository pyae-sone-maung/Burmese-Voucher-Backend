const express = require('express')
const router = express.Router()
const voucherController = require('../controller/voucher-controller')

router.get('/view-voucher/:id', voucherController.viewVoucherById)
router.get('/balance-voucher', voucherController.showBalanceVouchers)
router.get('/records', voucherController.showRecordVouchers)
router.post('/create-voucher', voucherController.createVoucher)
router.post('/search-voucher', voucherController.searchVoucherByDate)
router.patch('/update-voucher/:id', voucherController.updateVoucherById)
router.delete('/delete-voucher/:id', voucherController.deleteVoucherById)

module.exports = router