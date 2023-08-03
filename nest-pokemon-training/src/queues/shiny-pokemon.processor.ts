import { Processor, Process } from "@nestjs/bull";
import { Job } from "bull";

@Processor("shinyPokemon")
export class AudioConsumer {
  @Process("shinyPokemon-job")
  handleTranscode(job: Job) {
    console.log("Start audio compress into mp3...");
    console.log(job.data);
    console.log("completed!!");
  }
}
