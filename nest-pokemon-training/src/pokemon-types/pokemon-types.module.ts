import { Module } from "@nestjs/common";
import { PokemonTypesService } from "./pokemon-types.service";
import { PokemonTypesController } from "./pokemon-types.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [PokemonTypesController],
  providers: [PokemonTypesService, PrismaService],
  imports: [PrismaModule],
})
export class PokemonTypesModule {}
