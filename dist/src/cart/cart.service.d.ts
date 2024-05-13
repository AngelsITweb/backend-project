import { PrismaService } from '../../prisma/prisma.service';
export declare class CartService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
        price: number;
        count: number;
        userId: number;
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
        price: number;
        count: number;
        userId: number;
    }>;
    createCart(userId: number, partId: number): Promise<{
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
        price: number;
        count: number;
        userId: number;
    }>;
    deleteCart(id: number): Promise<{
        id: number;
        price: number;
        count: number;
        userId: number;
    }>;
}
