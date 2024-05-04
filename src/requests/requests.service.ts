import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";
import * as fs from "node:fs";
import {Brands} from "@prisma/client";

@Injectable()
export class RequestService {
    constructor(private readonly prisma: PrismaService ) {}

    async getAll(id: number) {
        return this.prisma.request.findMany({
            where: {
                carId: id,
                parts: {
                    none: {
                        cartId: {
                            not: null
                        }
                    }
                }
            },
            include: {
                parts: true
            }
        });
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
                    }
                },
                include: {
                    car: true
                }
            });
        });

        return Promise.all(requestsPromises);
    }


}
