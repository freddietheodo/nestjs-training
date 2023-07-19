import { Test } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { PrismaService } from "../src/prisma/prisma.service"; // Import the Prisma service
import { PokemonsModule } from "../src/pokemons/pokemons.module";

describe("PokemonsController (e2e)", () => {
  let app: INestApplication;
  let prismaService: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PokemonsModule],
    }).compile();

    app = moduleRef.createNestApplication();
    prismaService = moduleRef.get<PrismaService>(PrismaService);

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(async () => {
    await prismaService.$connect();
  });

  afterEach(async () => {
    await prismaService.$disconnect();
  });

  it("/pokemons (DELETE)", async () => {
    const deletedPokemonID = "500";

    const response = await request(app.getHttpServer())
      .delete("/pokemons")
      .send(deletedPokemonID);

    expect(response.status).toBe(201);
    // expect(response.body).toMatchObject(newPokemon);

    const createdPokemon = await prismaService.pokemon.findUnique({
      where: { id: 500 },
    });
    expect(createdPokemon).toBe(null);
  });

  it("/pokemons (POST)", async () => {
    const newPokemon = {
      id: 500,
      name: "Pikachu",
      url: "https://pokeapi.co/api/v2/pokemon/Pikachu/",
    };

    const response = await request(app.getHttpServer())
      .post("/pokemons")
      .send(newPokemon);

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newPokemon);

    const createdPokemon = await prismaService.pokemon.findUnique({
      where: { id: 500 },
    });
    expect(createdPokemon).toBeTruthy();
    expect(createdPokemon).toMatchObject(newPokemon);
  });
});
