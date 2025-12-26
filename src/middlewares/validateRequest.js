const validateRequest = (schema) => {
    return (req, res, next) => {
        console.log("BODY DITERIMA:", req.body);
        const result = schema.safeParse(req.body)

        if(!result.success) {
            const formatted = result.error.format()

            const flatError = Object.values(formatted)
                .flat()
                .filter(Boolean)
                .map(err => err._errors)
                .flat()

            return res.status(400).json({message : flatError.join(", ")})
        }

        next()
    }
}

module.exports = validateRequest