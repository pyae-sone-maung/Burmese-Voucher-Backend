const mongoose = require("mongoose");

const voucherSchema = mongoose.Schema(
    {
        voucherNo: { type: String },
        date: { type: Date },
        customerName: { type: String },
        customerPhone: { type: String },
        items: { type: Array },
        totalAmount: { type: Number },
        depositeAmount: { type: Number },
        balanceAmount: { type: Number },
    },
    { versionKey: false },
    { timestamp: true }
);

module.exports = mongoose.model("voucher", voucherSchema);
