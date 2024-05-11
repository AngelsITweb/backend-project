import { OrdersService } from "./orders.service";
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    getAll(userId: string): Promise<({
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
    getById(id: string): Promise<{
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
    createOrder(userId: string, body: any): Promise<{
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
    updateStatus(body: any): Promise<{
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
    adminGetById(id: string): Promise<{
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
}
