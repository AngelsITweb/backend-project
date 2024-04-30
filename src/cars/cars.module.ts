import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import {PrismaService} from "../../prisma/prisma.service";
import {ImageService} from "../image/image.service";

@Module({
  providers: [CarsService, PrismaService],
  controllers: [CarsController]
})
export class CarsModule {}
