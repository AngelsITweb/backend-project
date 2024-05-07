import { PrismaService } from "../../prisma/prisma.service";
export declare class OrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(id: number): Promise<({
        cart: {
            parts: {
                id: number;
                manufacturer: string;
                numberOrName: string;
                price: number;
                new: boolean;
                original: boolean;
                name: string;
                image: string;
                cartId: number;
                sellerId: number;
                carId: number;
                requestId: number;
            }[];
        } & {
            id: number;
            price: number;
            count: number;
            userId: number;
        };
    } & {
        id: number;
        sellerId: number;
        buyerId: number;
        price: number;
        status: import(".prisma/client").$Enums.OrderStatus;
        deliveryDate: Date;
        sentDate: Date;
        paymentScreenshot: string;
        cartId: number;
        deliveryAddress: string;
        phoneNumber: string;
    })[]>;
    getById(id: number): Promise<{
        cart: {
            parts: {
                id: number;
                manufacturer: string;
                numberOrName: string;
                price: number;
                new: boolean;
                original: boolean;
                name: string;
                image: string;
                cartId: number;
                sellerId: number;
                carId: number;
                requestId: number;
            }[];
        } & {
            id: number;
            price: number;
            count: number;
            userId: number;
        };
    } & {
        id: number;
        sellerId: number;
        buyerId: number;
        price: number;
        status: import(".prisma/client").$Enums.OrderStatus;
        deliveryDate: Date;
        sentDate: Date;
        paymentScreenshot: string;
        cartId: number;
        deliveryAddress: string;
        phoneNumber: string;
    }>;
    updateStatus(id: number, status: string): Promise<{
        id: number;
        sellerId: number;
        buyerId: number;
        price: number;
        status: import(".prisma/client").$Enums.OrderStatus;
        deliveryDate: Date;
        sentDate: Date;
        paymentScreenshot: string;
        cartId: number;
        deliveryAddress: string;
        phoneNumber: string;
    }>;
    createOrder(buyerId: number, cartId: number, deliveryAddress: string, phoneNumber: string, screenshot: string): Promise<{
        id: number;
        sellerId: number;
        buyerId: number;
        price: number;
        status: import(".prisma/client").$Enums.OrderStatus;
        deliveryDate: Date;
        sentDate: Date;
        paymentScreenshot: string;
        cartId: number;
        deliveryAddress: string;
        phoneNumber: string;
    }>;
    getPayedOrders(): Promise<({
        cart: {
            parts: {
                id: number;
                manufacturer: string;
                numberOrName: string;
                price: number;
                new: boolean;
                original: boolean;
                name: string;
                image: string;
                cartId: number;
                sellerId: number;
                carId: number;
                requestId: number;
            }[];
        } & {
            id: number;
            price: number;
            count: number;
            userId: number;
        };
    } & {
        id: number;
        sellerId: number;
        buyerId: number;
        price: number;
        status: import(".prisma/client").$Enums.OrderStatus;
        deliveryDate: Date;
        sentDate: Date;
        paymentScreenshot: string;
        cartId: number;
        deliveryAddress: string;
        phoneNumber: string;
    })[]>;
    getPaymentConfirmed(): Promise<({
        cart: {
            parts: {
                id: number;
                manufacturer: string;
                numberOrName: string;
                price: number;
                new: boolean;
                original: boolean;
                name: string;
                image: string;
                cartId: number;
                sellerId: number;
                carId: number;
                requestId: number;
            }[];
        } & {
            id: number;
            price: number;
            count: number;
            userId: number;
        };
    } & {
        id: number;
        sellerId: number;
        buyerId: number;
        price: number;
        status: import(".prisma/client").$Enums.OrderStatus;
        deliveryDate: Date;
        sentDate: Date;
        paymentScreenshot: string;
        cartId: number;
        deliveryAddress: string;
        phoneNumber: string;
    })[]>;
}
