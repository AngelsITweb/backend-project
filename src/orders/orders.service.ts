import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";

@Injectable()
export class OrdersService {
    constructor(private readonly prisma: PrismaService ) {}

    async getAll(id: number) {
        return this.prisma.order.findMany({
            where: {
                OR: [
                    { buyerId: id },
                    { sellerId: id }
                ]
            }
        });
    }

    async getById(id: number) {
        return this.prisma.order.findUnique({
            where: {
                id
            }
        })
    }

    async createOrder(buyerId: number, sellerId: number, cartId: number) {
        const price= await this.prisma.cart.findUnique({
            where: {
                id: cartId
            },
            select: {
                price: true
            }
        });
        return this.prisma.order.create({
            data: {
                buyerId,
                sellerId,
                price: price.price,
                cartId
            }
        })
    }
}
