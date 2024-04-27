import * as cookieParser from 'cookie-parser';

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AUTH_SERVICE } from './services';
import { RmqModule } from '../rmq/rmq.module';

@Module({
  imports: [RmqModule.register({ name: AUTH_SERVICE })],
  exports: [RmqModule],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookieParser()).forRoutes('*');
  }
}
