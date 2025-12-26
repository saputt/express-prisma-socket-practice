const { Router } = require("express");
const { getAllUsersController } = require("../controllers/userController");

const router = Router()

router.get("/api/users", getAllUsersController)

module.exports = router