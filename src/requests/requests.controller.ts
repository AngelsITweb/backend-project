import {Body, Controller, Get, Param, Post, Headers, UseInterceptors, UploadedFile} from '@nestjs/common';
import {RequestService} from "./requests.service";
import {FileInterceptor, MulterModule} from '@nestjs/platform-express';

@Controller('request')
export class RequestController {

    constructor(private readonly requestsService: RequestService ) {}

    @Get('all/:id')
    getAll(@Param('id') id: string) {
        const parsedId = parseInt(id, 10);
        return this.requestsService.getAll(parsedId);
    }

    @Get('/id/:id')
    getById(@Param('id') id: string) {
        const parsedId = parseInt(id, 10);
        return this.requestsService.getById(parsedId);
    }

    @Post('')
    async createRequest(
        @Body() body: any,
        @Headers('user-id') userId: string
    ): Promise<any> {
        const parsedUserId = parseInt(userId, 10);
        const { carId, name, image }: { carId: string; name: string, image: string } = body;
        const parsedCarId = parseInt(carId, 10);
        return this.requestsService.createRequest({ userId: parsedUserId, carId: parsedCarId, name, image });
    }

    @Get('/notifications')
    getByNotifications(@Headers('user-id') userId: string) {
        const parsedUserId = parseInt(userId, 10);
        return this.requestsService.getByCarNotifications(parsedUserId);
    }

    // @Post('/add-part')
    // async addPartToRequest(
    //     @Body() body: any,3
    // )
}
