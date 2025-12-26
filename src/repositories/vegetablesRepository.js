const prisma = require("../config/db");

const getAllVegetables = async () => await prisma.vegetables.findMany()

const createVegetable = async data => await prisma.vegetables.create({
    data : {
        name : data.name,
        price : data.price,
        quality : data.quality,
        stock : data.stock,
        seller : data.seller
    }
})

const deleteVegetable = async id => await prisma.vegetables.delete({
    where : {id}
})

const findVegetableById = async id => await prisma.vegetables.findUnique({
    where : {id}
})

const updateVegetable = async (id, updateData) => await prisma.vegetables.update({
    where : {id},
    data : updateData
})

module.exports = {
    getAllVegetables,
    createVegetable,
    deleteVegetable,
    findVegetableById,
    updateVegetable
}