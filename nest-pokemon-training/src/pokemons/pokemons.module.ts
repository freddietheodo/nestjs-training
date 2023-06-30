import { Module } from "@nestjs/common";
import { PokemonsService } from "./pokemons.service";
import { PokemonsController } from "./pokemons.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [PokemonsController],
  providers: [PokemonsService],
  imports: [PrismaModule],
})
export class PokemonsModule {}
