const voucherModel = require("../model/voucher-modal");

const createVoucher = async (req, res) => {
    const voucherDate = new Date(req.body.date);
    const newVoucher = {
        voucherNo: req.body.voucherNo,
        date: voucherDate,
        customerName: req.body.customerName || "",
        customerPhone: req.body.customerPhone || "",
        items: req.body.items,
        totalAmount: req.body.totalAmount,
        depositeAmount: req.body.depositeAmount,
        balanceAmount: req.body.balanceAmount,
    };
    try {
        await voucherModel.create(newVoucher);
        return res.sendStatus(201);
    } catch (error) {
        return res.sendStatus(500);
    }
};

const viewVoucherById = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await voucherModel.findById(id);
        if (data === null) return res.sendStatus(404);
        return res.status(200).json(data);
    } catch (error) {
        return res.sendStatus(500);
    }
};

const deleteVoucherById = async (req, res) => {
    const id = req.params.id;
    try {
        await voucherModel.findByIdAndDelete(id);
        return res.sendStatus(204);
    } catch (error) {
        return res.sendStatus(500);
    }
};

const updateVoucherById = async (req, res) => {
    const id = req.params.id;

    const data = await voucherModel.findById(id);
    if (data === null) return res.sendStatus(404);

    try {
        const voucherDate = new Date(req.body.date);
        const updateVoucher = {
            voucherNo: req.body.voucherNo || data.voucherNo,
            date: voucherDate || data.voucherDate,
            customerName: req.body.customerName || data.customerName,
            customerPhone: req.body.customerPhone || data.customerPhone,
            items: req.body.items || data.items,
            totalAmount: req.body.totalAmount,
            depositeAmount: req.body.depositeAmount,
            balanceAmount: req.body.balanceAmount,
        };

        await voucherModel.findByIdAndUpdate(
            id,
            { $set: updateVoucher },
            { multi: false }
        );
        return res.sendStatus(200);
    } catch (error) {
        return res.sendStatus(500);
    }
};

const searchVoucherByDate = async (req, res) => {
    const date = new Date(req.body.date);
    try {
        const data = await voucherModel
            .find({ date: date })
            .sort({ totalAmount: -1 });
        return res.status(200).json(data);
    } catch (error) {
        return res.sendStatus(500);
    }
};

// လက်ကျန်ငွေဘောင်ချာ
const showBalanceVouchers = async (req, res) => {
    try {
        const data = await voucherModel.find({ balanceAmount: { $gt: 0 } });
        return res.status(200).json(data);
    } catch (error) {
        return res.sendStatus(500);
    }
};

const showRecordVouchers = async (req, res) => {
    try {
        const data = await voucherModel.find({ balanceAmount: { $eq: 0 } });
        return res.status(200).json(data);
    } catch (error) {
        return res.sendStatus(500);
    }
};

module.exports = {
    createVoucher,
    viewVoucherById,
    deleteVoucherById,
    updateVoucherById,
    searchVoucherByDate,
    showBalanceVouchers,
    showRecordVouchers,
};
