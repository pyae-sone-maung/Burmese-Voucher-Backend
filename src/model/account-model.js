const mongoose = require("mongoose");

const accountSchema = mongoose.Schema(
    {
        username: { type: String },
        password: { type: String },
        businessName: { type: String },
        businessType: { type: String },
        address: { type: String },
        phone: { type: String },
    },
    { versionKey: false },
    { timestamps: true }
);

module.exports = mongoose.model("account", accountSchema);
