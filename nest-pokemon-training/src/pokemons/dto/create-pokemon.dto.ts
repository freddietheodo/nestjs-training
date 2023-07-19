import { PokemonType } from "src/pokemon-types/entities/pokemon-type.entity";

export class CreatePokemonDto {
  id: number;
  name: string;
  url: string;
  level?: number;
  types?: PokemonType[];
}
