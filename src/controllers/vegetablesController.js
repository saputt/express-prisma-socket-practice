const { getAllVegetablesService, addVegetablesService, deleteVegetablesService, updateVegetableService } = require("../services/vegetablesService")

const getAllVegetablesController = async (req, res) => {
    try {
        const vegetables = await getAllVegetablesService()
        res.status(200).json({
            status : "success",
            data : {
                vegetables
            }
        })
    } catch (error) {
        return res.status(400).json({
            status : "error",
            error : error.message
        })
    }
}

const addVegetableController = async (req, res) => {
    try {
        const vegetables = await addVegetablesService(req.body, req.user.id)
        
        req.io.emit("new_vegetable", vegetables)

        res.status(200).json({
            status : "success",
            data : {
                vegetables
            },
            message : "New vegetables has been added"
        })
    } catch (error) {
        return res.status(400).json({
            status : "error",
            error : error.message
        })
    }
}

const deleteVegetableController = async (req, res) => {
    try {
        const vegetables = await deleteVegetablesService(req.params.id)
        
        req.io.emit("deleted_vegetable", vegetables.id)

        res.status(200).json({
            status : "success",
            message : "Vegetable has been deleted"
        })
    } catch (error) {
        return res.status(400).json({
            status : "error",
            error : error.message
        })
    }
}

const updateVegetableController = async (req, res) => {
    try {
        const vegetable = await updateVegetableService(req.params.id, req.user.id, req.body)
        
        req.io.emit("update_vegetable", vegetable)

        res.status(200).json({
            status : "success",
            message : "Vegetables has been updated"
        })
    } catch (error) {
        return res.status(400).json({
            status : "error",
            error : error.message
        })
    }
} 

module.exports = {
    getAllVegetablesController,
    addVegetableController,
    deleteVegetableController,
    updateVegetableController
}