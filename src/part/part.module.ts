import { Module } from '@nestjs/common';
import { PartController } from './part.controller';
import { PartService } from './part.service';
import {PrismaService} from "../../prisma/prisma.service";

@Module({
  controllers: [PartController],
  providers: [PartService, PrismaService]
})
export class PartModule {}
