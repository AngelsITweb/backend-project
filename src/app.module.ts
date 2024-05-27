import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { PrismaService } from '../prisma/prisma.service';
import { UsersController } from "./users/users.controller";
import { CarsModule } from './cars/cars.module';
import { RequestModule } from './requests/requests.module';
import { CartModule } from './cart/cart.module';
import { PartModule } from './part/part.module';
import { OrdersModule } from './orders/orders.module';
import { AddUserIdMiddleware } from "./middlewares/TelegramIdToUserId";
import { MulterModule } from "@nestjs/platform-express";
import { ImageModule } from './image/image.module';
import { BotService } from './bot/bot.service';
import { BotModule } from './bot/bot.module';

@Module({
    providers: [PrismaService, BotService],
    controllers: [UsersController],
    imports: [
        UsersModule, CarsModule, RequestModule, CartModule, PartModule, OrdersModule,
        MulterModule.register({
            dest: './uploads',
        }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', '..', 'uploads'),
            serveRoot: '/uploads',
        }),
        ImageModule,
        BotModule
    ],

})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AddUserIdMiddleware)
            .exclude('/uploads*')
            .forRoutes('*');
    }
}
