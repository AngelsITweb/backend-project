import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaService } from '../prisma/prisma.service';
import {UsersController} from "./users/users.controller";
import { CarsModule } from './cars/cars.module';
import { RequestModule } from './requests/requests.module';
import { CartModule } from './cart/cart.module';
import { PartModule } from './part/part.module';
import { OrdersModule } from './orders/orders.module';
import {AddUserIdMiddleware} from "./middlewares/TelegramIdToUserId";

@Module({
    providers: [PrismaService],
    controllers: [UsersController],
    imports: [UsersModule, CarsModule, RequestModule, CartModule, PartModule, OrdersModule],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AddUserIdMiddleware)
            .forRoutes('*');
    }
}
