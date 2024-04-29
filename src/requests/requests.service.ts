import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";

@Injectable()
export class RequestService {
    constructor(private readonly prisma: PrismaService ) {}

    async getAll() {
        return this.prisma.request.findMany();
    }

    async getById(id: number) {
        return this.prisma.request.findUnique({where: {id}})
    }

    async createRequest({ userId, carId, name, image }: { userId: number; carId: number; name: string; image?: string; }): Promise<any> {
        const data = {
            name,
            image,
            car: {
                connect: { id: carId }
            },
            user: {
                connect: { id: userId }
            }
        }
        return this.prisma.request.create({
            data: data
        });
    }
}
