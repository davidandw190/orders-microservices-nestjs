import { Module } from '@nestjs/common';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';
import * as Joi  from 'joi'
import { ConfigModule } from '@nestjs/config';
import { RmqModule } from '@app/common';
import { AuthModule } from 'apps/auth/src/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_BILLING_QUEUE: Joi.string().required(),
      }),
    }),
    RmqModule,
    AuthModule,
  ],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
