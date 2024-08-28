import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from "../../prisma/prisma.service";
import { Brands } from "@prisma/client";
import { BotService } from "../bot/bot.service";

@Injectable()
export class RequestService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly botService: BotService
    ) {}

    async getAll(carId: number) {
        return this.prisma.request.findMany({
            where: {
                carId: carId,
                parts: {
                    every: {
                        orderId: null
                    }
                }
            },
            include: {
                parts: {
                    where: {
                        AND: [
                            { orderId: null },
                            { cartId: null }
                        ]
                    }
                }
            }
        });
    }

    async responded(id: number, userId: number) {
        const request = await this.prisma.request.update({
            where: { id },
            data: {
                respondedSellerIds: {
                    push: userId
                }
            }
        });

        if (!request) {
            throw new NotFoundException(`Request with ID ${id} not found`);
        }

        const user = await this.prisma.user.findUnique({ where: { id: request.userId } });
        const car = await this.prisma.car.findUnique({ where: { id: request.carId } });

        if (!user || !car) {
            throw new NotFoundException('User or Car not found');
        }

        const message = `Ваша заявка на машину ${car.brand} принята`;
        await this.botService.sendMessage(user.telegramId, message, 'https://mygarage-webapp.vercel.app/requests');

        return request;
    }

    async getById(id: number) {
        const request = await this.prisma.request.findUnique({
            where: { id },
            include: { car: true }
        });

        if (!request) {
            throw new NotFoundException(`Request with ID ${id} not found`);
        }

        return request;
    }

    async createRequest({ userId, carId, name, image }: { userId: number; carId: number; name: string; image?: string }): Promise<any> {
        const data = {
            name,
            image: image || null,
            car: {
                connect: { id: carId }
            },
            user: {
                connect: { id: userId }
            },
            respondedSellerIds: [0],
        };

        const car = await this.prisma.car.findUnique({ where: { id: carId } });

        if (!car) {
            throw new NotFoundException(`Car with ID ${carId} not found`);
        }

        const sellersWithNotifications = await this.prisma.user.findMany({
            where: {
                notifications: {
                    has: car.brand
                }
            }
        });

        const sendMessagePromises = sellersWithNotifications.map(async (user) => {
            const message = `Новая заявка на деталь на машину ${car.brand}`;
            await this.botService.sendMessage(user.telegramId, message, 'https://mygarage-webapp.vercel.app/seller-panel/seller-actual-orders');
        });

        await Promise.all(sendMessagePromises);

        return this.prisma.request.create({ data });
    }

    async getByCarNotifications(userId: number) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });

        if (!user) {
            throw new NotFoundException(`User with ID ${userId} not found`);
        }

        const brands = user.notifications;
        const requestsPromises = brands.map(async (brand) => {
            return this.prisma.request.findMany({
                where: {
                    car: {
                        brand: brand as Brands
                    },
                    NOT: {
                        respondedSellerIds: {
                            has: userId
                        }
                    }
                },
                include: {
                    car: true
                }
            });
        });

        const requestsArrays = await Promise.all(requestsPromises);
        return requestsArrays.flat();
    }
}
