/*
  Warnings:

  - You are about to drop the column `pokemonId` on the `PokemonType` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "PokemonType" DROP CONSTRAINT "PokemonType_pokemonId_fkey";

-- AlterTable
ALTER TABLE "PokemonType" DROP COLUMN "pokemonId";

-- CreateTable
CREATE TABLE "_PokemonToPokemonType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PokemonToPokemonType_AB_unique" ON "_PokemonToPokemonType"("A", "B");

-- CreateIndex
CREATE INDEX "_PokemonToPokemonType_B_index" ON "_PokemonToPokemonType"("B");

-- AddForeignKey
ALTER TABLE "_PokemonToPokemonType" ADD CONSTRAINT "_PokemonToPokemonType_A_fkey" FOREIGN KEY ("A") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonToPokemonType" ADD CONSTRAINT "_PokemonToPokemonType_B_fkey" FOREIGN KEY ("B") REFERENCES "PokemonType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
