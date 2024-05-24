import { Injectable } from '@nestjs/common';
import { PrismaService } from "../../prisma/prisma.service";

interface IPart {
    id: number;
    manufacturer: string;
    numberOrName: string;
    price: number;
    image: string;
    cartId: number | null;
    sellerId: number;
    carId: number;
    name: string;
    new : boolean;
    original: boolean;
}

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
                parts: {
                    include: {
                        car: true
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
                parts: true
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

    async createOrder(buyerId: number, cartId: number , deliveryAddress: string, phoneNumber: string, screenshot: string) {
        const cart = await this.prisma.cart.findUnique({
            where: {
                id: cartId
            },
            include: {
                parts: true
            }
        });

        if (!cart) {
            throw new Error(`Cart with id ${cartId} not found`);
        }

        if (!cart.parts || cart.parts.length === 0) {
            throw new Error(`Cart with id ${cartId} has no parts`);
        }

        const order = await this.prisma.order.create({
            data: {
                buyerId,
                sellerId: cart.parts[0].sellerId,
                price: cart.price * 1.05,
                parts: {
                    connect: cart.parts.map(part => ({ id: part.id }))
                },
                deliveryAddress,
                phoneNumber,
                paymentScreenshot: screenshot
            },
        });

        await this.prisma.cart.update({
            where: {
                id: cartId
            },
            data: {
                parts: {
                    set: []
                },
                price: 0,
                count: 0
            }
        });

        return order;
    }

    async getPayedOrders() {
        return this.prisma.order.findMany({
            where: {
                status: 'PAYED'
            },
            include: {
                parts: true
            }
        });
    }

    async getPaymentConfirmed() {
        return this.prisma.order.findMany({
            where: {
                status: 'PAYMENT_CONFIRMED'
            },
            include: {
                parts: true
            }
        });
    }
}
