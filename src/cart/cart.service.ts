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
        });
    }
21
    async getById(id: number) {
        return this.prisma.cart.findUnique({
            where: {
                id,
            },
        });
    }

    async createCart(userId: number, partIds: number[]) {
        const parts = await this.prisma.part.findMany({
            where: {
                id: {
                    in: partIds,
                },
            },
        });

        const totalPrice = parts.reduce((total, part) => total + part.price, 0);
        const totalCount = parts.length;

        const cart = await this.prisma.cart.create({
            data: {
                userId,
                price: totalPrice,
                count: totalCount,
                parts: {
                    connect: parts.map(part => ({ id: part.id })),
                },
            },
            include: {
                parts: true,
            },
        });

        return cart;
    }

    async deleteCart(id: number) {
        return this.prisma.cart.delete({
            where: {
                id
            }
        })
    }
}
