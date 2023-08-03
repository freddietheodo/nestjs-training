// pokemons.controller.spec.ts

import { PokemonsController } from "./pokemons.controller";
import { PokemonsService } from "./pokemons.service";

describe("PokemonsController", () => {
  let pokemonsController: PokemonsController;
  let pokemonsService: PokemonsService;

  beforeEach(() => {
    pokemonsService = new PokemonsService(null);
    pokemonsController = new PokemonsController(pokemonsService);
  });

  describe("findAll", () => {
    it("should call the findAll method in PokemonsService", async () => {
      const findAllMock = jest
        .spyOn(pokemonsService, "findAll")
        .mockResolvedValue([]);

      await pokemonsController.findAll();

      expect(findAllMock).toBeCalledTimes(1);
    });
  });
});
