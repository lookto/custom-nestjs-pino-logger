import { Injectable } from '@nestjs/common';
import { InjectPinoLogger } from 'nestjs-pino';
import { CustomLoggerService } from './logger/logger.service';

@Injectable()
export class AppService {
  constructor(
    @InjectPinoLogger(AppService.name)
    private readonly logger: CustomLoggerService,
  ) {}

  getHello(): string {
    this.logger.info('Hello World');
    this.logger.log('Custom logger function');
    return 'Hello World!';
  }
}
