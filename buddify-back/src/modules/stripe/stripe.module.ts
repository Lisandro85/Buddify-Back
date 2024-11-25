import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from '../stripe/Payment.entity';
import { StripeService } from '../stripe/stripe.service';
import { StripeController } from '../stripe/stripe.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Payment])],
  controllers: [StripeController],
  providers: [StripeService],
  exports: [StripeService],
})
export class StripeModule {}
