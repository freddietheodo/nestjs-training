// prisma/seed.ts

import { PrismaClient } from "@prisma/client";
// import * as POKEMON from "./kanto.json";

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  //   POKEMON.map((pokemon, i) => {
  //     prisma.pokemon.create({
  //       data: {
  //         id: pokemon.id,
  //         name: pokemon.name,
  //         url: pokemon.url,
  //       },
  //     });
  //   });

  const pokemon1 = await prisma.pokemon.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon/4/",
    },
  });
  const pokemon2 = await prisma.pokemon.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      name: "charmeleon",
      url: "https://pokeapi.co/api/v2/pokemon/5/",
    },
  });
  const pokemon3 = await prisma.pokemon.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      name: "charizard",
      url: "https://pokeapi.co/api/v2/pokemon/6/",
    },
  });
  const pokemon4 = await prisma.pokemon.upsert({
    where: { id: 7 },
    update: {},
    create: {
      id: 7,
      name: "squirtle",
      url: "https://pokeapi.co/api/v2/pokemon/7/",
    },
  });
  const pokemon5 = await prisma.pokemon.upsert({
    where: { id: 8 },
    update: {},
    create: {
      id: 8,
      name: "wartortle",
      url: "https://pokeapi.co/api/v2/pokemon/8/",
    },
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
