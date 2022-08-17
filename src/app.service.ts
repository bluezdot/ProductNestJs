import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(req, res): string {
    return 'Hello World! ' + req + res;
  }

  getGoodbye(): string {
    return 'See you later!';
  }
}
