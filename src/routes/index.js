const { Router } = require("express");
const authRoute = require("./authRoute")
const vegetablesRoute = require("./vegetablesRoute")
const userRoute = require("./userRoute")

const router = Router()

router.use(authRoute)
router.use(vegetablesRoute)
router.use(userRoute)

module.exports = router