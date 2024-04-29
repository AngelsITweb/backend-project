import {Body, Controller, Get, Param, Post, Headers} from '@nestjs/common';
import {RequestService} from "./requests.service";

@Controller('request')
export class RequestController {

    constructor(private readonly requestsService: RequestService ) {}

    @Get()
    getAll() {
        return this.requestsService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: number) {
        return this.requestsService.getById(id);
    }

    @Post('createRequest')
    createRequest(@Body() requestBody: any, @Headers('user-id') userId: string): Promise<any> {
        const parsedUserId = parseInt(userId, 10);
        const { carId, name, image }: { carId: number; name: string; image?: string; } = requestBody;
        return this.requestsService.createRequest({ userId: parsedUserId, carId, name, image });
    }

}
