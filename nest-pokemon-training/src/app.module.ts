import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "./prisma/prisma.module";
import { PokemonsModule } from "./pokemons/pokemons.module";
import { PrismaService } from "./prisma/prisma.service";
import { PokemonTypesModule } from './pokemon-types/pokemon-types.module';

@Module({
  imports: [PrismaModule, PokemonsModule, PokemonTypesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
