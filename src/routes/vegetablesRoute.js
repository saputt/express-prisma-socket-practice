const { Router } = require("express")
const { getAllVegetablesController, addVegetableController, deleteVegetableController, updateVegetableController } = require("../controllers/vegetablesController")
const authMiddleware = require("../middlewares/authMiddleware")
const validateRequst = require("../middlewares/validateRequest")
const { addVegetableSchema } = require("../validators/vegetablesValidator")

const router = Router()

router.get("/api/vegetables", getAllVegetablesController)
router.post("/api/vegetable", authMiddleware, validateRequst(addVegetableSchema), addVegetableController)
router.delete("/api/vegetable/:id", authMiddleware, deleteVegetableController)
router.patch("/api/vegetable/:id", authMiddleware, updateVegetableController)

module.exports = router