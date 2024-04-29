import { Injectable } from '@nestjs/common';
import { PrismaService } from "../../prisma/prisma.service";
import { Brands } from "@prisma/client";

@Injectable()
export class CarsService {

    constructor(private prisma: PrismaService) {}

    async getAll(userId: number): Promise<any> {
        return this.prisma.car.findMany({
            where: {
                ownerId: userId
            }
        });
    }

    async getById(carId: number): Promise<any> {
        return this.prisma.car.findUnique({
            where: {
                id: carId
            }
        });
    }

    async createCar({ ownerId, brand, model, number, image }: { ownerId: number; brand: string; model: string; number: string; image: string; }): Promise<any> {
        if (!Object.values(Brands).includes(brand as Brands)) {
            throw new Error('Неверное значение бренда');
        }

        const data  = {
            ownerId,
            brand: brand as Brands,
            model,
            number,
            image
        };

        return this.prisma.car.create({
            data: data
        });
    }

    async deleteCar(carId: number): Promise<any> {
        return this.prisma.car.delete({
            where: {
                id: carId
            }
        });
    }
}
