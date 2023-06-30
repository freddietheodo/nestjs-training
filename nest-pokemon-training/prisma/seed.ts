// prisma/seed.ts

import { PrismaClient } from "@prisma/client";
import * as POKEMON from "./kanto.json";

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  POKEMON.map((pokemon, i) => {
    prisma.pokemon.create({
      data: {
        id: pokemon.id,
        name: pokemon.name,
        url: pokemon.url,
      },
    });
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
