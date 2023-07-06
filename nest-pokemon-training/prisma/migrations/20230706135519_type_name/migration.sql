/*
  Warnings:

  - You are about to drop the `Types` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Types";

-- CreateTable
CREATE TABLE "PokemonType" (
    "id" INTEGER NOT NULL,
    "typeName" TEXT NOT NULL,

    CONSTRAINT "PokemonType_pkey" PRIMARY KEY ("id")
);
