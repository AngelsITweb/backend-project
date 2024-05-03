import { Injectable } from '@nestjs/common';
import { PrismaService } from "../../prisma/prisma.service";

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
            },
            include: {
                cart: {
                    include: {
                        parts: true
                    }
                }
            }
        });
    }

    async getById(id: number) {
        return this.prisma.order.findUnique({
            where: {
                id
            },
            include: {
                cart: {
                    include: {
                        parts: true
                    }
                }
            }
        });
    }

    async updateStatus(id: number, status: string) {
        return this.prisma.order.update({
            where: {
                id
            },
            data: {
                status: status as any
            }
        })
    }

    async createOrder(buyerId: number, cartId: number, deliveryAddress: string, phoneNumber: string, screenshot: string) {
        const cart = await this.prisma.cart.findUnique({
            where: {
                id: cartId
            },
            select: {
                price: true,
                userId: true
            }
        });

        if (!cart) {
            throw new Error('Корзина не найдена');
        }

        const sellerId = cart.userId;

        if (typeof sellerId !== 'number') {
            throw new Error('Некорректный идентификатор продавца');
        }

        return this.prisma.order.create({
            data: {
                buyerId,
                sellerId,
                price: cart.price * 1.05,
                cartId,
                deliveryAddress,
                phoneNumber,
                paymentScreenshot: screenshot
            },
        });
    }

    async getPayedOrders() {
        return this.prisma.order.findMany({
            where: {
                status: 'PAYED'
            },
            include: {
                cart: {
                    include: {
                        parts: true
                    }
                }
            }
        })
    }

    async getPaymentConfirmed() {
        return this.prisma.order.findMany({
            where: {
                status: 'PAYMENT_CONFIRMED'
            },
            include: {
                cart: {
                    include: {
                        parts: true
                    }
                }
            }
        })
    }
}
