"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const users_module_1 = require("./users/users.module");
const prisma_service_1 = require("../prisma/prisma.service");
const users_controller_1 = require("./users/users.controller");
const cars_module_1 = require("./cars/cars.module");
const requests_module_1 = require("./requests/requests.module");
const cart_module_1 = require("./cart/cart.module");
const part_module_1 = require("./part/part.module");
const orders_module_1 = require("./orders/orders.module");
const TelegramIdToUserId_1 = require("./middlewares/TelegramIdToUserId");
const platform_express_1 = require("@nestjs/platform-express");
const image_module_1 = require("./image/image.module");
const bot_service_1 = require("./bot/bot.service");
const bot_module_1 = require("./bot/bot.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(TelegramIdToUserId_1.AddUserIdMiddleware)
            .exclude('/uploads*')
            .forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaService, bot_service_1.BotService],
        controllers: [users_controller_1.UsersController],
        imports: [
            users_module_1.UsersModule, cars_module_1.CarsModule, requests_module_1.RequestModule, cart_module_1.CartModule, part_module_1.PartModule, orders_module_1.OrdersModule,
            platform_express_1.MulterModule.register({
                dest: './uploads',
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', '..', 'uploads'),
                serveRoot: '/uploads',
            }),
            image_module_1.ImageModule,
            bot_module_1.BotModule
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map