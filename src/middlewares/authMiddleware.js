const { user } = require("../config/db");
const { findUserById } = require("../repositories/userRepository");
const { verifyAccessToken } = require("../utils/verifyToken");

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    const token = authHeader && authHeader.split(" ")[1];

    if(!token) res.status(400).json({message : "Not authorized"});

    try {
        const decoded = verifyAccessToken(token);

        const userExist = await findUserById(decoded.id);

        if(!userExist) res.status(400).json({message : "User no longer exist"})

        req.user = userExist

        next()
    } catch (error) {
        return res.status(400).json({message : "Token error"})
    }
}

module.exports = authMiddleware