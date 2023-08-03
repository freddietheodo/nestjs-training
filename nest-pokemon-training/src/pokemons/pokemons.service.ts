import { Injectable } from "@nestjs/common";
import { CreatePokemonDto } from "./dto/create-pokemon.dto";
import { UpdatePokemonDto } from "./dto/update-pokemon.dto";
import { PrismaService } from "../prisma/prisma.service";
import { Prisma } from "@prisma/client";
import { CreateShinyDto } from "./dto/create-shiny.dto";

@Injectable()
export class PokemonsService {
  constructor(private prisma: PrismaService) {}

  create(createPokemonDto: CreatePokemonDto) {
    const prismaData: Prisma.PokemonCreateInput = {
      name: createPokemonDto.name,
      id: createPokemonDto.id,
      url: createPokemonDto.url,
    };

    const createdPokemon = this.prisma.pokemon.create({
      data: prismaData,
    });
    return createdPokemon;
  }

  createShiny(createShinyDto: CreateShinyDto) {
    const prismaData: Prisma.ShinyPokemonCreateInput = {
      pokemonSpeciesID: createShinyDto.pokemonSpeciesId,
      paymentDetails: {
        cardNumber: createShinyDto.paymentDetails.cardNumber,
        cardCVC: createShinyDto.paymentDetails.cardCVC,
        cardExpiryDate: createShinyDto.paymentDetails.cardExpiryDate,
      },
    };

    const createdPokemon = this.prisma.pokemon.create({
      data: prismaData,
    });
    return createdPokemon;
  }

  findAll() {
    return this.prisma.pokemon.findMany({
      include: {
        types: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} pokemon`;
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return this.prisma.pokemon.delete({
      where: { id }, // Specify the ID of the Pokemon to delete
    });
  }
}
