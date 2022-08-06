const jwt = require ("jsonwebtoken");

const authenticate = async (res, req, next) => {
    // Get token from header
    const token = req.header("authentication")

    try {
        const { userId, exp } = await jwt.verify(token, process.env.JWT_SECRET);

        // Check if token has expired
        if (exp < Date.now().valueOf() / 1000) {
            return res.status(401).json({
                error: "JWT token has expired, please login to obtain a new one"
            });
        }else{
            req.userID = userId;
            next();
        }
    } catch (error) {
        next(error)
    }
}

module.exports = authenticate