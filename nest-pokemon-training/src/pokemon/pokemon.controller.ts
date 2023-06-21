import { Controller, Get } from "@nestjs/common";
import { PokemonService, PokemonType } from "./pokemon.service";

@Controller("pokemon")
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  getHello(): PokemonType[] {
    return this.pokemonService.getPokemon();
  }
}
