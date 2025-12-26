const { getAllUsers } = require("../repositories/userRepository")

const getAllUsersService = async () => {
    return getAllUsers()
}

module.exports = {
    getAllUsersService
}