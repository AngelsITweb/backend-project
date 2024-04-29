/*
  Warnings:

  - You are about to drop the column `active` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `isConfirmed` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `isDelivered` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `isPayed` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `isPaymentConfirmed` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `isSent` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `carId` on the `Part` table. All the data in the column will be lost.
  - You are about to drop the column `isSold` on the `Part` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Part` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `Part` table. All the data in the column will be lost.
  - You are about to drop the `CartPart` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cartId` to the `Part` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberOrName` to the `Part` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Part` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellerId` to the `Part` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PAYED', 'PAYMENT_CONFIRMED', 'SENT', 'DELIVERED', 'CONFIRMED');

-- DropForeignKey
ALTER TABLE "CartPart" DROP CONSTRAINT "CartPart_cartId_fkey";

-- DropForeignKey
ALTER TABLE "CartPart" DROP CONSTRAINT "CartPart_partId_fkey";

-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "active",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "isActive",
DROP COLUMN "isConfirmed",
DROP COLUMN "isDelivered",
DROP COLUMN "isPayed",
DROP COLUMN "isPaymentConfirmed",
DROP COLUMN "isSent",
ADD COLUMN     "status" "OrderStatus" NOT NULL DEFAULT 'PAYED';

-- AlterTable
ALTER TABLE "Part" DROP COLUMN "carId",
DROP COLUMN "isSold",
DROP COLUMN "name",
DROP COLUMN "number",
ADD COLUMN     "cartId" INTEGER NOT NULL,
ADD COLUMN     "numberOrName" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sellerId" INTEGER NOT NULL,
ALTER COLUMN "image" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Request" ADD COLUMN     "image" TEXT,
ADD COLUMN     "name" TEXT NOT NULL;

-- DropTable
DROP TABLE "CartPart";

-- AddForeignKey
ALTER TABLE "Part" ADD CONSTRAINT "Part_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Part" ADD CONSTRAINT "Part_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
