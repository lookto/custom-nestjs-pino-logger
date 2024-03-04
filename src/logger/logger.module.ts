// logger.module.ts
import { Module } from '@nestjs/common';
import { LoggerModule as PinoLoggerModule } from 'nestjs-pino';
import { CustomLoggerService } from './logger.service';

@Module({
  exports: [CustomLoggerService],
  providers: [CustomLoggerService],
  imports: [
    PinoLoggerModule.forRoot({
      pinoHttp: {
        level: 'debug',
        autoLogging: false,
        serializers: {
          /* eslint-disable @typescript-eslint/no-empty-function */
          req: () => {},
          /* eslint-disable @typescript-eslint/no-empty-function */
          res: () => {},
        },
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
          },
        },
      },
    }),
  ],
})
export class CustomLoggerModule {}
