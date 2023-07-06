// prisma/seed.ts

import { PrismaClient } from "@prisma/client";
// import * as POKEMON from "./kanto.json";

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const pokemon1 = await prisma.pokemon.upsert({
    where: { id: 4 },
    update: {
      id: 4,
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon/4/",
      level: 1,
      types: {
        connect: [{ id: 1 }], // Connect the user to groups with IDs 1 and 2
      },
    },
    create: {
      id: 4,
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon/4/",
      level: 1,
      types: {
        connect: [{ id: 1 }], // Connect the user to groups with IDs 1 and 2
      },
    },
  });
  const pokemon2 = await prisma.pokemon.upsert({
    where: { id: 5 },
    update: {
      id: 5,
      name: "charmeleon",
      url: "https://pokeapi.co/api/v2/pokemon/5/",
      level: 1,
      types: {
        connect: [{ id: 1 }], // Connect the user to groups with IDs 1 and 2
      },
    },
    create: {
      id: 5,
      name: "charmeleon",
      url: "https://pokeapi.co/api/v2/pokemon/5/",
      level: 1,
      types: {
        connect: [{ id: 1 }], // Connect the user to groups with IDs 1 and 2
      },
    },
  });
  const pokemon3 = await prisma.pokemon.upsert({
    where: { id: 6 },
    update: {
      id: 6,
      name: "charizard",
      url: "https://pokeapi.co/api/v2/pokemon/6/",
      level: 1,
      types: {
        connect: [{ id: 1 }], // Connect the user to groups with IDs 1 and 2
      },
    },
    create: {
      id: 6,
      name: "charizard",
      url: "https://pokeapi.co/api/v2/pokemon/6/",
      level: 1,
      types: {
        connect: [{ id: 1 }], // Connect the user to groups with IDs 1 and 2
      },
    },
  });
  const pokemon4 = await prisma.pokemon.upsert({
    where: { id: 7 },
    update: {
      id: 7,
      name: "squirtle",
      url: "https://pokeapi.co/api/v2/pokemon/7/",
      level: 1,
      types: {
        connect: [{ id: 2 }, { id: 3 }], // Connect the user to groups with IDs 1 and 2
      },
    },
    create: {
      id: 7,
      name: "squirtle",
      url: "https://pokeapi.co/api/v2/pokemon/7/",
      level: 1,
      types: {
        connect: [{ id: 2 }, { id: 3 }], // Connect the user to groups with IDs 1 and 2
      },
    },
  });
  const pokemon5 = await prisma.pokemon.upsert({
    where: { id: 8 },
    update: {
      id: 8,
      name: "wartortle",
      url: "https://pokeapi.co/api/v2/pokemon/8/",
      level: 1,
      types: {
        connect: [{ id: 1 }, { id: 2 }], // Connect the user to groups with IDs 1 and 2
      },
    },
    create: {
      id: 8,
      name: "wartortle",
      url: "https://pokeapi.co/api/v2/pokemon/8/",
      level: 1,
      types: {
        connect: [{ id: 1 }, { id: 2 }], // Connect the user to groups with IDs 1 and 2
      },
    },
  });

  const grassType = await prisma.pokemonType.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      typeName: "Grass",
    },
  });

  const waterType = await prisma.pokemonType.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      typeName: "Water",
    },
  });

  const fireType = await prisma.pokemonType.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      typeName: "Fire",
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
