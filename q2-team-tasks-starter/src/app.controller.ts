import { Controller, Get } from "@nestjs/common";
import { Public } from "./auth/auth.decorators";

@Controller()
export class AppController {
  @Get()
  @Public()
  info() {
    return {
      name: "Team Tasks API",
      hint: 'Send "Authorization: Bearer <token>". Run "npm test" in a new terminal to check your solution.',
      testTokens: {
        admin: "token-amina",
        member: ["token-brian", "token-chloe"],
        viewer: "token-diego",
      },
    };
  }

  @Get("health")
  @Public()
  health() {
    return { status: "ok" };
  }
}
