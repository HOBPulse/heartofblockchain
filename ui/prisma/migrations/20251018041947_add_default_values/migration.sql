/*
  Warnings:

  - You are about to drop the column `mint` on the `Campaign` table. All the data in the column will be lost.
  - Added the required column `mint_address` to the `Campaign` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Campaign" DROP COLUMN "mint",
ADD COLUMN     "mint_address" TEXT NOT NULL,
ALTER COLUMN "amount_donated" SET DEFAULT 0,
ALTER COLUMN "threshold_reached" SET DEFAULT false;
