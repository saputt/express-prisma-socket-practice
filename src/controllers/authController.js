const { registerService, loginService, logoutService, refreshTokenService } = require("../services/authService")

const loginController = async (req, res) => {
    try {
        const loginUser = await loginService(req.body)

        res.cookie("refreshToken", loginUser.refreshToken, {
            httpOnly : true,
            secure : process.env.NODE_ENV === "production",
            sameSite : "strict",
            maxAge : 1000 * 60 * 60 * 24  * 7
        })

        res.status(200).json({
            status : "success",
            data : {
                user : {
                    id : loginUser.id,
                    email : loginUser.email
                }
            },
            accessToken : loginUser.accessToken
        })
    } catch (error) {
        console.log("ada erorr", error)
        return res.status(400).json({
            status : "error",
            error : error.message
        })
    }
}

const registerController = async (req, res) => {
    try {
        await registerService(req.body)

        res.status(200).json({
            status : "success",
            data : "User has been created"
        })
    } catch (error) {
        return res.status(400).json({
            status : "error",
            error : error.message
        })
    }
}

const logoutController = async (req, res) => {
    try {
        await logoutService(req.user.id)
        res.clearCookie("refreshToken", {
            httpOnly : true,
            sameSite : "strict",
            secure : process.env.NODE_ENV === "production"
        })
        res.status(200).json({
            status : "success",
            data : "Logout successfull"
        })
    } catch (error) {
        res.clearCookie("refreshToken")
        return res.status(400).json({
            status : "error",
            error : error.message
        })
    }
}

const refreshTokenController = async (req, res) => {
    try {
        const token = await refreshTokenService(req.cookies.refreshToken)

        res.cookie("refreshToken", token.newRefreshToken, {
            httpOnly : true,
            secure : process.env.NODE_ENV === "production",
            sameSite : "strict",
            maxAge : token.remainingTime
        })

        res.status(200).json({
            status : "success",
            accessToken : token.newAccessToken
        })
    } catch (error) {
        return res.status(400).json({
            status : "error",
            error : error.message
        })
    }
}

module.exports = {
    loginController,
    registerController,
    logoutController,
    refreshTokenController
}