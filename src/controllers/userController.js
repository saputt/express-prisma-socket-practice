const { getAllUsersService } = require("../services/usersService")

const getAllUsersController = async (req, res) => {
    try {
        const users = await getAllUsersService()

        res.status(200).json({
            status : "success",
            data : {
                users
            }
        })
    } catch (error) {
        return res.status(400).json({
            status : "error",
            error : error.message
        })
    }
}

module.exports = {
    getAllUsersController
}