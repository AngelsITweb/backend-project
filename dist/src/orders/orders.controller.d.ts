import { OrdersService } from "./orders.service";
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    getAll(userId: string): Promise<({
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
    getById(id: string): Promise<{
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
    createOrder(userId: string, body: any): Promise<{
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
    updateStatus(body: any): Promise<{
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
