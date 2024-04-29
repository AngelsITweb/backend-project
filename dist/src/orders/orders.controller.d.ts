import { OrdersService } from "./orders.service";
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    getAll(): Promise<{
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
    createOrder(body: any): Promise<{
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
