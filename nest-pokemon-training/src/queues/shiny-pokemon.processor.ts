import { Processor, Process } from "@nestjs/bull";
import { Job } from "bull";

@Processor("shinyPokemon")
export class ShinyPokemonProcessor {
  @Process("shinyPokemon-job")
  handleTranscode(job: Job) {
    const start = new Date().getTime();
    for (let i = 0; i < 12_000_000_000; i++) {}
    const end = new Date().getTime();
    console.log("✨✨✨✨✨✨✨✨✨");
    console.log(`Generated a shiny pokemon in ${end - start}ms`);
  }
}
