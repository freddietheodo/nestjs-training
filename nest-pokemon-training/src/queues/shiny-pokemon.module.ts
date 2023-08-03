import { Module } from "@nestjs/common";
import { BullModule } from "@nestjs/bull";
import { shinyPokemon } from "./shiny-pokemon.processor";

@Module({
  imports: [
    BullModule.registerQueue({
      name: "shinyPokemon",
    }),
  ],
  providers: [shinyProcessor],
})
export class ShinyModule {}
