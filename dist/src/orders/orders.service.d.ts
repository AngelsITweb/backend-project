import { PrismaService } from "../../prisma/prisma.service";
export declare class OrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(id: number): Promise<({
        parts: ({
            car: {
                id: number;
                image: string;
                brand: import(".prisma/client").$Enums.Brands;
                model: string;
                number: string;
                ownerId: number;
            };
        } & {
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
            orderId: number;
        })[];
    } & {
        id: number;
        sellerId: number;
        buyerId: number;
        price: number;
        status: import(".prisma/client").$Enums.OrderStatus;
        deliveryDate: Date;
        sentDate: Date;
        paymentScreenshot: string;
        deliveryAddress: string;
        phoneNumber: string;
    })[]>;
    getById(id: number): Promise<{
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
            orderId: number;
        }[];
    } & {
        id: number;
        sellerId: number;
        buyerId: number;
        price: number;
        status: import(".prisma/client").$Enums.OrderStatus;
        deliveryDate: Date;
        sentDate: Date;
        paymentScreenshot: string;
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
        deliveryAddress: string;
        phoneNumber: string;
    }>;
    getPayedOrders(): Promise<({
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
            orderId: number;
        }[];
    } & {
        id: number;
        sellerId: number;
        buyerId: number;
        price: number;
        status: import(".prisma/client").$Enums.OrderStatus;
        deliveryDate: Date;
        sentDate: Date;
        paymentScreenshot: string;
        deliveryAddress: string;
        phoneNumber: string;
    })[]>;
    getPaymentConfirmed(): Promise<({
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
            orderId: number;
        }[];
    } & {
        id: number;
        sellerId: number;
        buyerId: number;
        price: number;
        status: import(".prisma/client").$Enums.OrderStatus;
        deliveryDate: Date;
        sentDate: Date;
        paymentScreenshot: string;
        deliveryAddress: string;
        phoneNumber: string;
    })[]>;
}
