const bcrypt = require("bcryptjs")

const hashPassword = async password => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    return hash
}

const comparePassword = async (password, hashedPassword) => await bcrypt.compare(password, hashedPassword)

module.exports = {
    hashPassword,
    comparePassword
}