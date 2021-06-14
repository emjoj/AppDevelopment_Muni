/*
  Warnings:

  - You are about to drop the column `user1Id` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `user2Id` on the `Contact` table. All the data in the column will be lost.
  - The `state` column on the `Contact` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `rightUserId` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leftUserId` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "State" AS ENUM ('APPROVED', 'UNAPPROVED', 'BLOCKED', 'PENDING');

-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_user1Id_fkey";

-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_user2Id_fkey";

-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "user1Id",
DROP COLUMN "user2Id",
ADD COLUMN     "rightUserId" INTEGER NOT NULL,
ADD COLUMN     "leftUserId" INTEGER NOT NULL,
DROP COLUMN "state",
ADD COLUMN     "state" "State" NOT NULL DEFAULT E'UNAPPROVED';

-- AddForeignKey
ALTER TABLE "Contact" ADD FOREIGN KEY ("rightUserId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD FOREIGN KEY ("leftUserId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
