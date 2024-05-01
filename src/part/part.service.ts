import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";

@Injectable()
export class PartService {
    constructor(private readonly prisma: PrismaService ) {}

    getAll(carId: number) {
        return this.prisma.part.findMany({
            where: {
                carId
            }
        })
    }

    getById(id: number) {
        return this.prisma.part.findUnique({
            where: {
                id
            }
        })
    }

    createPart(name: string, isNew: boolean, requestId: number, isOriginal: boolean, manufacturer: string, numberOrName: string, price: number, image: string, sellerId: number, carId: number) {
        return this.prisma.part.create({
            data: {
                name,
                new: isNew,
                original: isOriginal,
                requestId,
                manufacturer,
                numberOrName,
                price,
                image,
                sellerId,
                carId
            }
        })
    }
}
