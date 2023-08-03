import { Module } from "@nestjs/common";
import { BullModule } from "@nestjs/bull";
import { ShinyProcessor } from "./shiny-pokemon.processor";

@Module({
  imports: [
    BullModule.registerQueue({
      name: "shiny-pokemon",
    }),
  ],
  providers: [ShinyProcessor],
})
export class ShinyModule {}
