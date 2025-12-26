const { Router } = require("express");
const { loginController, registerController, logoutController, refreshTokenController } = require("../controllers/authController");
const { loginSchema, registerSchema } = require("../validators/authValidator");
const validateRequest = require("../middlewares/validateRequest");
const authMiddleware = require("../middlewares/authMiddleware");

const router = Router()

router.post("/api/login", validateRequest(loginSchema), loginController)
router.post("/api/register", validateRequest(registerSchema), registerController)
router.post("/api/logout", authMiddleware, logoutController)
router.post("/api/refresh", refreshTokenController)

module.exports = router