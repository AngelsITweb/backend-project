import {Body, Controller, Get, Post} from '@nestjs/common';
import {PartService} from "./part.service";

@Controller('part')
export class PartController {
    constructor(private readonly partService: PartService ) {}

    @Get('')
    async getAll(@Body() body: any) {
        return this.partService.getAll(body.carId)
    }

    @Get(':id')
    async getById(@Body() body: any) {
        return this.partService.getById(body.id)
    }

    @Post('')
    async createPart(@Body() body: any) {
        return this.partService.createPart(body.name, body.new, body.original, body.manufacturer, body.state, body.numberOrName, body.price, body.image, body.sellerId, body.carId)
    }
}
