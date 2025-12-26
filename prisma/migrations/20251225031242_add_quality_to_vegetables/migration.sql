-- CreateEnum
CREATE TYPE "categoryVegetables" AS ENUM ('LOW', 'STANDART', 'HIGH');

-- AlterTable
ALTER TABLE "vegetables" ADD COLUMN     "quality" "categoryVegetables" NOT NULL DEFAULT 'STANDART';
