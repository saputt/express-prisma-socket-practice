const prisma = require("../config/db")

const findUserByEmail = async email => await prisma.user.findUnique({
    where : {email}
})

const findUserById = async id => await prisma.user.findUnique({
    where : {id}
})

const createUser = async data => await prisma.user.create({
    data : {
        name : data.name,
        email : data.email,
        password : data.password
    }
})

const updateRefreshToken = async (id, token) => await prisma.user.update({
    where : {id},
    data : {
        refreshToken : token
    }
})

const findUserByRefreshToken = async token => await prisma.user.findFirst({
    where : {refreshToken : token}
})

const getAllUsers = async () => await prisma.user.findMany({
    select : {
        id : true,
        name : true
    }
})

module.exports = {
    findUserByEmail,
    createUser,
    updateRefreshToken,
    findUserById,
    findUserByRefreshToken,
    getAllUsers
}