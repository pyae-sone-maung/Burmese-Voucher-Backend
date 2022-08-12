const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) return res.sendStatus(401);

    const [type, token] = authHeader.split(" ");
    if (type !== 'Bearer') return res.sendStatus(401);
    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if (err) return res.sendStatus(401);
        else next();
    });
};

module.exports = { auth };
