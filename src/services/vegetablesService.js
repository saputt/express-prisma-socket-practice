const { vegetables } = require("../config/db")
const { getAllVegetables, createVegetable, findVegetableById, deleteVegetable, updateVegetable } = require("../repositories/vegetablesRepository")

const getAllVegetablesService = async () => {
    return getAllVegetables()
}

const addVegetablesService= async (data, id) => {
    const vegetableData = {
        name : data.name,
        price : data.price,
        stock : data.stock,
        quality : data.quality || "LOW",
        seller : id
    }

    return await createVegetable(vegetableData)
}

const deleteVegetablesService = async id => {
    const vegetableExist = await findVegetableById(id)

    if(!vegetableExist) throw new Error("Vegetable doesnt exist")

    return deleteVegetable(id)
}

const updateVegetableService = async (id, userId, data) => {
    const vegetable = await findVegetableById(id)
    
    if(!vegetable) throw new Error("Vegetable not found")

    const isAuthorized = vegetable.seller === userId

    if(!isAuthorized) throw new Error("Your not authorized to edit this vegetable")

    return updateVegetable(id, data)
}

module.exports = {
    getAllVegetablesService,
    addVegetablesService,
    deleteVegetablesService,
    updateVegetableService
}