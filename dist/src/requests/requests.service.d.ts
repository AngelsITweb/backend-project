import { PrismaService } from "../../prisma/prisma.service";
export declare class RequestService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(id: number): Promise<({
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
        name: string;
        image: string;
        carId: number;
        userId: number;
        sellerId: number;
    })[]>;
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
    })[][]>;
}
