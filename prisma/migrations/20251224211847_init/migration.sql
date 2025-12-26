-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "refreshToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vegetables" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "seller" TEXT NOT NULL,

    CONSTRAINT "vegetables_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "vegetables" ADD CONSTRAINT "vegetables_seller_fkey" FOREIGN KEY ("seller") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
