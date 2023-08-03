import { Module } from "@nestjs/common";
import { PokemonsService } from "./pokemons.service";
import { PokemonsController } from "./pokemons.controller";
import { PrismaModule } from "../prisma/prisma.module";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  controllers: [PokemonsController],
  providers: [PokemonsService, PrismaService],
  imports: [PrismaModule],
})
export class PokemonsModule {}
