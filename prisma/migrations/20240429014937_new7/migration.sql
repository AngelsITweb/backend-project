-- DropForeignKey
ALTER TABLE "Part" DROP CONSTRAINT "Part_cartId_fkey";

-- DropForeignKey
ALTER TABLE "Request" DROP CONSTRAINT "Request_partId_fkey";

-- AlterTable
ALTER TABLE "Part" ALTER COLUMN "cartId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Part" ADD CONSTRAINT "Part_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE SET NULL ON UPDATE CASCADE;
