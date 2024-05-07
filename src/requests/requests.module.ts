import { Module } from '@nestjs/common';
import { RequestController } from './requests.controller';
import { RequestService } from './requests.service';
import {PrismaService} from "../../prisma/prisma.service";
import {MulterModule} from "@nestjs/platform-express";

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [RequestController],
  providers: [RequestService, PrismaService]
})
export class RequestModule {}
