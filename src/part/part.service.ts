import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class PartService {
    constructor(private readonly prisma: PrismaService) {}

    async getAll(carId: number) {
        return this.prisma.part.findMany({
            where: {
                carId
            }
        });
    }

    async getById(id: number) {
        const part = await this.prisma.part.findUnique({
            where: {
                id
            }
        });

        if (!part) {
            throw new NotFoundException(`Part with ID ${id} not found`);
        }

        return part;
    }

    async createPart(
        requestId: number,
        name: string,
        isNew: boolean,
        isOriginal: boolean,
        manufacturer: string,
        numberOrName: string,
        price: number,
        image: string | undefined,
        sellerId: number,
        carId: number
    ) {
        return this.prisma.part.create({
            data: {
                name,
                new: isNew,
                original: isOriginal,
                manufacturer,
                numberOrName,
                price,
                image: image || null,
                sellerId,
                carId,
                requestId
            }
        });
    }
}
