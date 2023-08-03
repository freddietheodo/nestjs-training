import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { PokemonsService } from "./pokemons.service";
import { CreatePokemonDto } from "./dto/create-pokemon.dto";
import { UpdatePokemonDto } from "./dto/update-pokemon.dto";
import { Queue } from "bull";
import { InjectQueue } from "@nestjs/bull";
import { CreateShinyDto } from "./dto/create-shiny.dto";

@Controller("pokemons")
export class PokemonsController {
  constructor(
    private readonly pokemonsService: PokemonsService,
    @InjectQueue("shiny-pokemon") private readonly shinyPokemonQueue: Queue
  ) {}

  @Post()
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonsService.create(createPokemonDto);
  }

  @Post()
  async transcode() {
    await this.shinyPokemonQueue.add("shinyPokemon-job", {
      file: "audio.mp3",
    });
  }

  @Get()
  findAll() {
    return this.pokemonsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.pokemonsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonsService.update(+id, updatePokemonDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.pokemonsService.remove(+id);
  }
}
