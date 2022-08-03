const bcrypt = require("bcrypt");
const accountModel = require("../model/account-model");

const createAccount = async (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) return res.sendStatus(500);

        try {
            const businessInfo = {
                username: req.body.username,
                password: hash,
                businessName: req.body.businessName || "",
                businessType: req.body.businessType || "",
                address: req.body.address || "",
                phone: req.body.phone || "",
            };
            accountModel.create(businessInfo);
            return res
                .status(201)
                .json({ message: `creat business successfully` });
        } catch (error) {
            return res.sendStatus(500);
        }
    });
};

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const data = await accountModel.findOne({ username: username });
        if (data === null) {
            return res.sendStatus(404);
        } else {
            bcrypt.compare(password, data.password, (err, result) => {
                if (result)
                    return res.status(200).json({
                        id: data._id,
                        businessName: data.businessName,
                        businessType: data.businessType,
                        address: data.address,
                        phone: data.phone,
                    });
                return res.sendStatus(401);
            });
        }
    } catch (error) {
        return res.sendStatus(500);
    }
};

const updateBusinessInfo = async (req, res) => {
    const id = req.params.id;
    const data = await accountModel.findById(id);
    if (data === null) return res.sendStatus(400);
    try {
        const updateBusinessInfo = {
            businessName: req.body.businessName || data.businessName,
            businessType: req.body.businessType || data.businessType,
            address: req.body.address || data.address,
            phone: req.body.phone || data.phone,
        };
        await accountModel.findByIdAndUpdate(
            id,
            { $set: updateBusinessInfo },
            { multi: false }
        );
        return res.sendStatus(200);
    } catch (error) {
        return res.sendStatus(500);
    }
};

const updateAccount = async (req, res) => {
    const id = req.params.id;
    const result = await accountModel.findById(id);
    if (result === null) return res.sendStatus(400);
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
        if (err) return res.sendStatus(500);
        try {
            const updateData = {
                username: req.body.username,
                password: hash,
            };
            await accountModel.findByIdAndUpdate(
                id,
                { $set: updateData },
                { multi: false, returnDocument: "after" }
            );
            return res.sendStatus(200);
        } catch (err) {
            return res.sendStatus(500);
        }
    });
};

module.exports = { createAccount, login, updateBusinessInfo, updateAccount };
