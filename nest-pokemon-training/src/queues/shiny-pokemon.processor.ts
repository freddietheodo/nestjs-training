import { Processor, Process } from "@nestjs/bull";

@Processor("shiny-pokemon")
export class ShinyProcessor {
  @Process()
  async processMyJob(job: any) {
    // Your job processing logic here
    console.log("Processing job data:", job.data);
    // For example, you can process data or call some service function here.
  }
}
