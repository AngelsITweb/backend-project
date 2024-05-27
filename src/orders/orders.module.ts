import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import {PrismaService} from "../../prisma/prisma.service";
import {BotModule} from "../bot/bot.module";

@Module({
  imports: [BotModule],
  controllers: [OrdersController],
  providers: [OrdersService, PrismaService]
})
export class OrdersModule {}
