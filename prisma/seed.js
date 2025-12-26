const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

const sellerId = "0aa4a3d2-5aef-430e-9a38-2bd179b1af6b"

const vegetablesData = [
  {
    name: "Cabbage",
    price: 2000,
    stock: 100,
    seller: sellerId,
  },
  {
    name: "Carrot",
    price: 5000,
    stock: 50,
    seller: sellerId,
  },
  {
    name: "Broccoli",
    price: 8000,
    stock: 30,
    seller: sellerId,
  }
];

const main = async () => {
    console.log("Memulai seeding...")
    const result = await prisma.vegetables.createMany({
        data : vegetablesData
    })
    console.log(`${result.count()} vegetables added`)
}

main()
    .catch(err => {
        console.error(err)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })