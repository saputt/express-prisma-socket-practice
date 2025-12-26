const jwt = require("jsonwebtoken")

const generateAccessToken = (id) => {
    const payload = {id}
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn : process.env.JWT_EXPIRED
    })
    return accessToken
}

const generateRefreshToken = (id) => {
    const payload = {id}
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
        expiresIn : process.env.JWT_REFRESH_EXPIRED
    })
    return refreshToken
}

const generateNewRefreshToken = (id, expired) => {
    const payload = {id}
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
        expiresIn : expired
    })
    return refreshToken
}



module.exports = {
    generateAccessToken,
    generateRefreshToken,
    generateNewRefreshToken
}