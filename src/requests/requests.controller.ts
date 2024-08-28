import { Body, Controller, Get, Param, Post, Headers, Put, HttpException, HttpStatus } from '@nestjs/common';
import { RequestService } from "./requests.service";

@Controller('request')
export class RequestController {
    constructor(private readonly requestsService: RequestService) {}

    @Get('all/:id')
    async getAll(@Param('id') id: string) {
        try {
            const parsedId = parseInt(id, 10);
            if (isNaN(parsedId)) {
                throw new HttpException('Invalid ID', HttpStatus.BAD_REQUEST);
            }
            return await this.requestsService.getAll(parsedId);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('/id/:id')
    async getById(@Param('id') id: string) {
        try {
            const parsedId = parseInt(id, 10);
            if (isNaN(parsedId)) {
                throw new HttpException('Invalid ID', HttpStatus.BAD_REQUEST);
            }
            return await this.requestsService.getById(parsedId);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post('')
    async createRequest(
        @Body() body: { carId: string; name: string; image?: string },
        @Headers('user-id') userId: string
    ): Promise<any> {
        try {
            const parsedUserId = parseInt(userId, 10);
            const parsedCarId = parseInt(body.carId, 10);
            if (isNaN(parsedUserId) || isNaN(parsedCarId)) {
                throw new HttpException('Invalid user ID or car ID', HttpStatus.BAD_REQUEST);
            }
            return await this.requestsService.createRequest({
                userId: parsedUserId,
                carId: parsedCarId,
                name: body.name,
                image: body.image
            });
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('/notifications')
    async getByNotifications(@Headers('user-id') userId: string) {
        try {
            const parsedUserId = parseInt(userId, 10);
            if (isNaN(parsedUserId)) {
                throw new HttpException('Invalid user ID', HttpStatus.BAD_REQUEST);
            }
            return await this.requestsService.getByCarNotifications(parsedUserId);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Put('/responded/:id')
    async respondRequest(@Param('id') id: string, @Headers('user-id') userId: string) {
        try {
            const parsedId = parseInt(id, 10);
            const parsedUserId = parseInt(userId, 10);
            if (isNaN(parsedId) || isNaN(parsedUserId)) {
                throw new HttpException('Invalid ID', HttpStatus.BAD_REQUEST);
            }
            return await this.requestsService.responded(parsedId, parsedUserId);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
