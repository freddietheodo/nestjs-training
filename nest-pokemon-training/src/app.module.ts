import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PokemonService } from "./pokemon/pokemon.service";
import { PokemonController } from "./pokemon/pokemon.controller";
import { PrismaModule } from './prisma/prisma.module';
import { PokemonsModule } from './pokemons/pokemons.module';

@Module({
  imports: [PrismaModule, PokemonsModule],
  controllers: [AppController, PokemonController],
  providers: [AppService, PokemonService],
})
export class AppModule {}
