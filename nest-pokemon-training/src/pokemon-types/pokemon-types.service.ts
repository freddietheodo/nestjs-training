import { Injectable } from "@nestjs/common";
import { CreatePokemonTypeDto } from "./dto/create-pokemon-type.dto";
import { UpdatePokemonTypeDto } from "./dto/update-pokemon-type.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PokemonTypesService {
  constructor(private prisma: PrismaService) {}
  create(createPokemonTypeDto: CreatePokemonTypeDto) {
    return "This action adds a new pokemonType";
  }

  findAll() {
    return `This action returns all pokemonTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pokemonType`;
  }

  update(id: number, updatePokemonTypeDto: UpdatePokemonTypeDto) {
    return `This action updates a #${id} pokemonType`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemonType`;
  }
}
