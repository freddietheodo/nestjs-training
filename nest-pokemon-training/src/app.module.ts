import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "./prisma/prisma.module";
import { PokemonsModule } from "./pokemons/pokemons.module";
import { PrismaService } from "./prisma/prisma.service";
import { PokemonTypesModule } from "./pokemon-types/pokemon-types.module";
import { BullModule } from "@nestjs/bull";

@Module({
  imports: [
    PrismaModule,
    PokemonsModule,
    PokemonTypesModule,
    BullModule.forRootAsync({
      useFactory: () => ({
        redis: {
          host: "localhost",
          port: 6379,
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
