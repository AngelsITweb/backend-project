/*
  Warnings:

  - The `partId` column on the `Cart` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Cart" ALTER COLUMN "price" DROP NOT NULL,
ALTER COLUMN "count" DROP NOT NULL,
DROP COLUMN "partId",
ADD COLUMN     "partId" INTEGER[];
