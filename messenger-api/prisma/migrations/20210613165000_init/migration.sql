/*
  Warnings:

  - You are about to drop the column `text` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the `Conversation_User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Conversation_User" DROP CONSTRAINT "Conversation_User_conversationId_fkey";

-- DropForeignKey
ALTER TABLE "Conversation_User" DROP CONSTRAINT "Conversation_User_userId_fkey";

-- AlterTable
ALTER TABLE "Conversation" ADD COLUMN     "isPinned" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "text",
ADD COLUMN     "content" TEXT;

-- DropTable
DROP TABLE "Conversation_User";

-- CreateTable
CREATE TABLE "ConversationUser" (
    "id" SERIAL NOT NULL,
    "conversationId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ConversationUser" ADD FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConversationUser" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
