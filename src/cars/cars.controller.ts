import {Body, Controller, Delete, Get, Post, Headers, Param, UseInterceptors, UploadedFile} from '@nestjs/common';
import {CarsService} from "./cars.service";
import {Brands} from "@prisma/client";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) {}

    @Get('getAll')
    async getAll(@Headers('user-id') userId: string): Promise<any> {
        const parsedUserId = parseInt(userId, 10);
        return await this.carsService.getAll(parsedUserId);
    }

    @Post('')
    async createCar(
        @Body() body: any,
        @Headers('user-id') userId: string
    ): Promise<any> {
        const parsedUserId = parseInt(userId, 10);

        if (!body || !body.brand || !body.model || !body.number) {
            throw new Error('Не все обязательные поля были переданы');
        }

        const { image, brand, model, number } = body;

        if (!Object.values(Brands).includes(brand as Brands)) {
            throw new Error('Неверное значение бренда');
        }

        return this.carsService.createCar({ ownerId: parsedUserId, brand, model, number, image });
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<any> {
        return await this.carsService.getById(parseInt(id, 10));
    }

    @Delete('deleteCar')
    async deleteCar(@Body() body: any): Promise<any> {
        const { carId } = body;
        return await this.carsService.deleteCar(carId);
    }1
}