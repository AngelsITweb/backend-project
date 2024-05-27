import { PrismaService } from "../../prisma/prisma.service";
import { BotService } from "../bot/bot.service";
export declare class RequestService {
    private readonly prisma;
    private readonly botService;
    constructor(prisma: PrismaService, botService: BotService);
    getAll(carId: number): Promise<({
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
        name: string;
        image: string;
        carId: number;
        userId: number;
        sellerId: number;
        respondedSellerIds: number[];
    })[]>;
    responded(id: any, userId: any): Promise<void>;
    getById(id: number): Promise<{
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
        name: string;
        image: string;
        carId: number;
        userId: number;
        sellerId: number;
        respondedSellerIds: number[];
    }>;
    createRequest({ userId, carId, name, image }: {
        userId: number;
        carId: number;
        name: string;
        image: string;
    }): Promise<any>;
    getByCarNotifications(userId: number): Promise<({
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
        name: string;
        image: string;
        carId: number;
        userId: number;
        sellerId: number;
        respondedSellerIds: number[];
    })[]>;
}
