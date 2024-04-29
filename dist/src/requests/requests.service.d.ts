import { PrismaService } from "../../prisma/prisma.service";
export declare class RequestService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        id: number;
        name: string;
        image: string;
        carId: number;
        partId: number;
        userId: number;
    }[]>;
    getById(id: number): Promise<{
        id: number;
        name: string;
        image: string;
        carId: number;
        partId: number;
        userId: number;
    }>;
    createRequest({ userId, carId, name, image }: {
        userId: number;
        carId: number;
        name: string;
        image?: string;
    }): Promise<any>;
}
