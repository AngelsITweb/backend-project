"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const bot_service_1 = require("../bot/bot.service");
let RequestService = class RequestService {
    constructor(prisma, botService) {
        this.prisma = prisma;
        this.botService = botService;
    }
    async getAll(carId) {
        const requests = await this.prisma.request.findMany({
            where: {
                carId: carId,
                OR: [
                    {
                        parts: {
                            some: {
                                orderId: null,
                                cartId: null
                            }
                        }
                    },
                    {
                        isResponseSent: false
                    }
                ]
            },
            include: {
                parts: true,
            }
        });
        return requests;
    }
    async responded(id) {
        const request = await this.prisma.request.update({
            where: { id },
            data: { isResponseSent: true }
        });
        const user = await this.prisma.user.findUnique({ where: { id: request.userId } });
        const car = await this.prisma.car.findUnique({ where: { id: request.carId } });
        const message = `Ваша заявка на машину ${car.brand} принята`;
        await this.botService.sendMessage(user.telegramId, message, 'https://mygarage-webapp-1wvpi27e8-ceos-projects-828a268d.vercel.app/requests');
    }
    async getById(id) {
        return this.prisma.request.findUnique({
            where: { id },
            include: { car: true }
        });
    }
    async createRequest({ userId, carId, name, image }) {
        const data = {
            name,
            image,
            car: {
                connect: { id: carId }
            },
            user: {
                connect: { id: userId }
            }
        };
        const car = await this.prisma.car.findUnique({ where: { id: carId } });
        const sellersWithNotifications = await this.prisma.user.findMany({
            where: {
                notifications: {
                    has: car.brand
                }
            }
        });
        const sendMessagePromises = sellersWithNotifications.map(async (user) => {
            const message = `Новая заявка на деталь на машину ${car.brand}`;
            await this.botService.sendMessage(user.telegramId, message, 'https://mygarage-webapp-1wvpi27e8-ceos-projects-828a268d.vercel.app/seller-panel/seller-actual-orders');
        });
        await Promise.all(sendMessagePromises);
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        return this.prisma.request.create({ data });
    }
    async getByCarNotifications(userId) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        console.log(user.notifications);
        const brands = user.notifications;
        const requestsPromises = brands.map(async (brand) => {
            return this.prisma.request.findMany({
                where: {
                    car: {
                        brand: brand
                    },
                    isResponseSent: false
                },
                include: {
                    car: true
                }
            });
        });
        return Promise.all(requestsPromises);
    }
};
exports.RequestService = RequestService;
exports.RequestService = RequestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, bot_service_1.BotService])
], RequestService);
//# sourceMappingURL=requests.service.js.map