import { Module } from '@nestjs/common';
import { RequestController } from './requests.controller';
import { RequestService } from './requests.service';
import {PrismaService} from "../../prisma/prisma.service";
import {MulterModule} from "@nestjs/platform-express";
import {BotModule} from "../bot/bot.module";

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
    BotModule,

  ],
  controllers: [RequestController],
  providers: [RequestService, PrismaService]
})
export class RequestModule {}
