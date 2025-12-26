const { default: z } = require("zod");

const addVegetableSchema = z.object({
    name : z
        .string("Name vegetables must be string")
        .min(5, "Name length must be 5-30")
        .max(30, "Name length must be 5-30"),
    price : z
        .float32("Price must be a number")
        .min(1),
    stock : z
        .int()
        .min(1),
    quality : z
        .string()
        .min(1)
        .optional()
})

module.exports = {
    addVegetableSchema
}