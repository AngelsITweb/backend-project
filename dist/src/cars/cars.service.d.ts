import { PrismaService } from "../../prisma/prisma.service";
export declare class CarsService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(userId: number): Promise<any>;
    getById(carId: number): Promise<any>;
    createCar({ ownerId, brand, model, number, image }: {
        ownerId: number;
        brand: string;
        model: string;
        number: string;
        image: string;
    }): Promise<any>;
    deleteCar(carId: number): Promise<any>;
}
