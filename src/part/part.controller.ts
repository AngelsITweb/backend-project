import { Body, Controller, Get, Headers, Post, Param, HttpException, HttpStatus } from '@nestjs/common';
import { PartService } from "./part.service";

@Controller('part')
export class PartController {
    constructor(private readonly partService: PartService) {}

    @Get(':carId')
    async getAll(@Param('carId') carId: string) {
        try {
            const parsedCarId = parseInt(carId, 10);
            if (isNaN(parsedCarId)) {
                throw new HttpException('Invalid car ID', HttpStatus.BAD_REQUEST);
            }
            return await this.partService.getAll(parsedCarId);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('id/:id')
    async getById(@Param('id') id: string) {
        try {
            const parsedId = parseInt(id, 10);
            if (isNaN(parsedId)) {
                throw new HttpException('Invalid ID', HttpStatus.BAD_REQUEST);
            }
            return await this.partService.getById(parsedId);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post('')
    async createPart(@Body() body: {
        requestId: number,
        name: string,
        new: boolean,
        original: boolean,
        manufacturer: string,
        numberOrName: string,
        price: number,
        image?: string,
        carId: number
    }, @Headers('user-id') userId: string) {
        try {
            const parsedUserId = parseInt(userId, 10);
            if (isNaN(parsedUserId)) {
                throw new HttpException('Invalid user ID', HttpStatus.BAD_REQUEST);
            }
            return await this.partService.createPart(
                body.requestId,
                body.name,
                body.new,
                body.original,
                body.manufacturer,
                body.numberOrName,
                body.price,
                body.image,
                parsedUserId,
                body.carId
            );
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
