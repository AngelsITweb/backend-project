import { PrismaService } from "../../prisma/prisma.service";
export declare class PartService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(carId: number): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        manufacturer: string;
        state: string;
        numberOrName: string;
        price: number;
        image: string;
        cartId: number;
        sellerId: number;
        carId: number;
    }[]>;
    getById(id: number): import(".prisma/client").Prisma.Prisma__PartClient<{
        id: number;
        manufacturer: string;
        state: string;
        numberOrName: string;
        price: number;
        image: string;
        cartId: number;
        sellerId: number;
        carId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    createPart(manufacturer: string, state: string, numberOrName: string, price: number, image: string, sellerId: number, carId: number): import(".prisma/client").Prisma.Prisma__PartClient<{
        id: number;
        manufacturer: string;
        state: string;
        numberOrName: string;
        price: number;
        image: string;
        cartId: number;
        sellerId: number;
        carId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
