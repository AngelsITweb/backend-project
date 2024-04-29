-- DropForeignKey
ALTER TABLE "Request" DROP CONSTRAINT "Request_partId_fkey";

-- AlterTable
ALTER TABLE "Request" ALTER COLUMN "partId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE SET NULL ON UPDATE CASCADE;
