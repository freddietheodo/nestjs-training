-- CreateTable
CREATE TABLE "CardDetails" (
    "cardNumber" INTEGER NOT NULL,
    "cardCVC" INTEGER NOT NULL,
    "cardExpiraryDate" TEXT NOT NULL,

    CONSTRAINT "CardDetails_pkey" PRIMARY KEY ("cardNumber")
);

-- CreateTable
CREATE TABLE "ShinyPokemon" (
    "pokemonSpeciesID" INTEGER NOT NULL,

    CONSTRAINT "ShinyPokemon_pkey" PRIMARY KEY ("pokemonSpeciesID")
);

-- CreateTable
CREATE TABLE "_CardDetailsToShinyPokemon" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CardDetailsToShinyPokemon_AB_unique" ON "_CardDetailsToShinyPokemon"("A", "B");

-- CreateIndex
CREATE INDEX "_CardDetailsToShinyPokemon_B_index" ON "_CardDetailsToShinyPokemon"("B");

-- AddForeignKey
ALTER TABLE "_CardDetailsToShinyPokemon" ADD CONSTRAINT "_CardDetailsToShinyPokemon_A_fkey" FOREIGN KEY ("A") REFERENCES "CardDetails"("cardNumber") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardDetailsToShinyPokemon" ADD CONSTRAINT "_CardDetailsToShinyPokemon_B_fkey" FOREIGN KEY ("B") REFERENCES "ShinyPokemon"("pokemonSpeciesID") ON DELETE CASCADE ON UPDATE CASCADE;
