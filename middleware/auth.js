const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
    // Get token from header
    const token = req.header("authorization");
    try {
    const { userId, exp } = await jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
        // Check if token has expired
        if (exp < Date.now().valueOf() / 1000) {
            return res.status(401).json({
                error: "JWT token has expired, please login to obtain a new one"
            });
        } else {
            req.userId = userId;
            next();
        }
    } catch (error) {
        next(error);
    }
};

module.exports = authenticate;
