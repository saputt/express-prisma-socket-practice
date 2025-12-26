const { default: z } = require("zod");

const loginSchema = z.object({
    email : z
        .string("Email must be string")
        .email("Thats not a correct email")
        .min(1, "Email must be fill"),
    password : z
        .string("password must be string")
        .min(1, "Password must be fill")
})

const registerSchema = z.object({
    name : z
        .string("Name must be string")
        .min(5, "Name length must be 5-30")
        .max(30, "Name length must be 5-30"),
    email : z
        .string("Email must be string")
        .email("Thats not a correct email")
        .min(1, "Email must be fill"),
    password : z
        .string("password must be string")
        .min(5, "Password length must be 5-30")
        .max(30, "Password length must be 5-30")
})

module.exports = {
    loginSchema,
    registerSchema
}