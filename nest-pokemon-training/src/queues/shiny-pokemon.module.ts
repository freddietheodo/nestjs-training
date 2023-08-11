import { Module } from "@nestjs/common";
import { BullModule } from "@nestjs/bull";
import { ShinyPokemonProcessor } from "./shiny-pokemon.processor";

@Module({
  imports: [
    BullModule.registerQueue({
      name: "shinyPokemon",
    }),
  ],
  providers: [ShinyPokemonProcessor],
})
export class ShinyModule {}
