import { Injectable } from "@nestjs/common";
import * as POKEMON from "./kanto.json";

export type PokemonType = {
  id: number;
  name: string;
  url: string;
};

@Injectable()
export class PokemonService {
  getPokemon(): PokemonType[] {
    return POKEMON;
  }
}
