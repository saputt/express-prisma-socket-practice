const { date } = require("zod")
const { findUserByEmail, createUser, updateRefreshToken, findUserByRefreshToken, findUserById } = require("../repositories/userRepository")
const { comparePassword, hashPassword } = require("../utils/bcrypt")
const { generateAccessToken, generateRefreshToken, generateNewRefreshToken } = require("../utils/generateToken")
const { verifyRefreshToken } = require("../utils/verifyToken")

const loginService = async data => {
    const userExist = await findUserByEmail(data.email)

    console.log(userExist)

    if(!userExist) throw new Error("User doesnt exist")

    const correctPassword = await comparePassword(data.password, userExist.password)

    if(!correctPassword) throw new Error("Password incorrect")

    const accessToken = generateAccessToken(userExist.id)
    const refreshToken = generateRefreshToken(userExist.id)

    await updateRefreshToken(userExist.id, refreshToken)

    const {password, ...userDetail} = userExist

    return {...userDetail, accessToken, refreshToken}
}

const registerService = async data => {
    const userExist = await findUserByEmail(data.email)

    if(userExist) throw new Error("Email has been used")

    const hashedPassword = await hashPassword(data.password)

    const dataUser = {
        name : data.name,
        email : data.email,
        password : hashedPassword
    }

    return createUser(dataUser)
}

const logoutService = async id => {
    return updateRefreshToken(id, null)
}

const refreshTokenService = async token => {
    if(!token) throw new Error("Token doesnt exist, go to login")

    const decoded = verifyRefreshToken(token)

    const userExist = await findUserById(decoded.id)

    if(!userExist) throw new Error("User no longer exist")

    const refreshInDB = await findUserByRefreshToken(token)

    if(!refreshInDB) throw new Error("Refresh token invalid")
    
    const remainingTime = Math.floor(decoded.exp - (Date.now() / 1000))
    
    const newRefreshToken = generateNewRefreshToken(decoded.id, remainingTime)
    const newAccessToken = generateAccessToken(decoded.id)


    await updateRefreshToken(decoded.id, newRefreshToken)

    return {newAccessToken, newRefreshToken, remainingTime}
}

module.exports = {
    loginService,
    registerService,
    logoutService,
    refreshTokenService
}