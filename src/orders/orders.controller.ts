import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {OrdersService} from "./orders.service";

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Get('')
    async getAll() {
        return this.ordersService.getAll(1)
    }

    @Get(':id')
    async getById(@Param('id') id: number) {
        return this.ordersService.getById(id)
    }

    @Post('')
    async createOrder(@Body() body: any) {
        return this.ordersService.createOrder(body.buyerId, body.sellerId, body.cartId)
    }
}
