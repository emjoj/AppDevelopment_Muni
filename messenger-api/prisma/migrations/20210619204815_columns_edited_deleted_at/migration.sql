-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "edited" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "delatedAt" TIMESTAMP(3);
