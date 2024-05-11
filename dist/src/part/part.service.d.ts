import { PrismaService } from "../../prisma/prisma.service";
export declare class PartService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(carId: number): import(".prisma/client").Prisma.PrismaPromise<{
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
    }[]>;
    getById(id: number): import(".prisma/client").Prisma.Prisma__PartClient<{
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
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    createPart(requestId: number, name: string, isNew: boolean, isOriginal: boolean, manufacturer: string, numberOrName: string, price: number, image: string, sellerId: number, carId: number): import(".prisma/client").Prisma.Prisma__PartClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
