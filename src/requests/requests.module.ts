import { Module } from '@nestjs/common';
import { RequestController } from './requests.controller';
import { RequestService } from './requests.service';
import {PrismaService} from "../../prisma/prisma.service";

@Module({
  controllers: [RequestController],
  providers: [RequestService, PrismaService]
})
export class RequestModule {}
