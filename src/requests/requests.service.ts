import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";
import * as fs from "node:fs";
import {Brands} from "@prisma/client";
import {BotService} from "../bot/bot.service";

@Injectable()
export class RequestService {
    constructor(private readonly prisma: PrismaService, private readonly botService: BotService) {}

    async getAll(carId: number) {
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


    async getById(id: number) {
        return this.prisma.request.findUnique({
            where: { id },
            include: { car: true }
        });
    }


    async createRequest({ userId, carId, name, image }: { userId: number; carId: number; name: string; image: string }): Promise<any> {
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
        })
        const sendMessagePromises = sellersWithNotifications.map(async (user) => {
            const message = `Новая заявка на деталь на машину ${car.brand}`;
            await this.botService.sendMessage( user.telegramId, message, 'https://mygarage-webapp-1wvpi27e8-ceos-projects-828a268d.vercel.app/seller-panel/seller-actual-orders' );
        });
        await Promise.all(sendMessagePromises);
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        })
        return this.prisma.request.create({ data });
    }

    async getByCarNotifications(userId: number) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        console.log(user.notifications)
        const brands = user.notifications;

        const requestsPromises = brands.map(async (brand) => {
            return this.prisma.request.findMany({
                where: {
                    car: {
                        brand: brand as Brands
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


}
