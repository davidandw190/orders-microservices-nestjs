import { Controller } from '@nestjs/common';
import { BillingService } from './billing.service';
import { RmqService } from '@app/common';
import { EventPattern, Payload, Ctx } from '@nestjs/microservices/decorators';
import { RmqContext } from '@nestjs/microservices';

@Controller()
export class BillingController {
  constructor(
    private readonly billingService: BillingService,
    private readonly rmqService: RmqService,
  ) {}

  @EventPattern('order_created')
  async handleOrderCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    this.billingService.bill(data);
    this.rmqService.ack(context);
  }
}
