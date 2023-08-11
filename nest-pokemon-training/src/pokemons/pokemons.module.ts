import { Module } from "@nestjs/common";
import { PokemonsService } from "./pokemons.service";
import { PokemonsController } from "./pokemons.controller";
import { PrismaModule } from "../prisma/prisma.module";
import { PrismaService } from "../prisma/prisma.service";
import { BullModule } from "@nestjs/bull";

@Module({
  controllers: [PokemonsController],
  providers: [PokemonsService, PrismaService],
  imports: [
    PrismaModule,
    BullModule.registerQueueAsync({
      name: "shiny-pokemon",
    }),
  ],
})
export class PokemonsModule {}
