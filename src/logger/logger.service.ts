// logger.service.ts
import { Injectable } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class CustomLoggerService extends PinoLogger {
  info(msg: string) {
    console.log('This is a test!');
    super.info(msg);
  }

  log(msg: string) {
    console.log(msg);
  }
}
