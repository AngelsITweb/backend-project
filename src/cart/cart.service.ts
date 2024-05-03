import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CartService {
    constructor(private readonly prisma: PrismaService) {}

    async getAll(userId: string) {
        const parsedUserId = parseInt(userId, 10);
        return this.prisma.cart.findMany({
            where: {
                userId: parsedUserId
            },
            include: {
                parts: true
            }
        });
    }
21
    async getById(id: number) {
        return this.prisma.cart.findFirst({
            where: {
                id,
            },
            include: {
                parts: true
            }
        });
    }

    async createCart(userId: number, partId: number) {
        const existingCart = await this.prisma.cart.findFirst({
            where: { userId },
            include: { parts: true }, // Включаем связанные детали
        });

        if (existingCart) {
            const partAlreadyInCart = existingCart.parts.some(part => part.id === partId);

            if (partAlreadyInCart) {
                return existingCart;
            } else {
                const cart = await this.prisma.cart.update({
                    where: { id: existingCart.id },
                    data: {
                        parts: {
                            connect: { id: partId },
                        },
                        count: { increment: 1 },
                        price: { increment: (await this.prisma.part.findUnique({ where: { id: partId } })).price },
                    },
                    include: {
                        parts: true,
                    },
                });
                return cart;
            }
        } else {
            const part = await this.prisma.part.findUnique({
                where: { id: partId },
            });

            if (!part) {
                throw new Error('Деталь не найдена');
            }

            const cart = await this.prisma.cart.create({
                data: {
                    userId,
                    price: part.price,
                    count: 1,
                    parts: {
                        connect: { id: partId },
                    },
                },
                include: {
                    parts: true,
                },
            });
            return cart;
        }
    }





    async deleteCart(id: number) {
        return this.prisma.cart.delete({
            where: {
                id
            }
        })
    }
}
