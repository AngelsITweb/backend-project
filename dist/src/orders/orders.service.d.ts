import { PrismaService } from "../../prisma/prisma.service";
export declare class OrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(id: number): Promise<{
        id: number;
        sellerId: number;
        buyerId: number;
        price: number;
        status: import(".prisma/client").$Enums.OrderStatus;
        deliveryDate: Date;
        sentDate: Date;
        paymentScreenshot: string;
        cartId: number;
    }[]>;
    getById(id: number): Promise<{
        id: number;
        sellerId: number;
        buyerId: number;
        price: number;
        status: import(".prisma/client").$Enums.OrderStatus;
        deliveryDate: Date;
        sentDate: Date;
        paymentScreenshot: string;
        cartId: number;
    }>;
    createOrder(buyerId: number, sellerId: number, cartId: number): Promise<{
        id: number;
        sellerId: number;
        buyerId: number;
        price: number;
        status: import(".prisma/client").$Enums.OrderStatus;
        deliveryDate: Date;
        sentDate: Date;
        paymentScreenshot: string;
        cartId: number;
    }>;
}
