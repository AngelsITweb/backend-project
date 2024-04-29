import { PrismaService } from '../../prisma/prisma.service';
export declare class CartService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(userId: string): Promise<{
        id: number;
        price: number;
        count: number;
        userId: number;
    }[]>;
    21: any;
    getById(id: number): Promise<{
        id: number;
        price: number;
        count: number;
        userId: number;
    }>;
    createCart(userId: number, partIds: number[]): Promise<{
        parts: {
            id: number;
            manufacturer: string;
            state: string;
            numberOrName: string;
            price: number;
            image: string;
            cartId: number;
            sellerId: number;
            carId: number;
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
