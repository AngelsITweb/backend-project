import {Body, Controller, Get, Param, Post, Headers, Put, Patch} from '@nestjs/common';
import {OrdersService} from "./orders.service";

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Get('')
    async getAll(@Headers('user-id') userId: string) {
        const parsedUserId = parseInt(userId, 10);
        return this.ordersService.getAll(parsedUserId)
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const parsedId = parseInt(id, 10);
        return this.ordersService.getById(parsedId)
    }

    @Post('')
    async createOrder(@Headers('user-id') userId: string, @Body() body: any) {
        const parsedUserId = parseInt(userId, 10);
        return this.ordersService.createOrder(body.cartId, parsedUserId, body.deliveryAddress, body.phoneNumber, body.paymentScreenshot)
    }

    @Get('manager/payed-orders')
    async getPayedOrders() {
        return this.ordersService.getPayedOrders()
    }

    @Patch('/manager/status/')
    async updateStatus(@Body() body: any) {
        const parsedId = parseInt(body.id, 10);
        return this.ordersService.updateStatus(parsedId, body.status)
    }

    @Get('manager/payment-confirmed-orders')
    async getPaymentConfirmed() {
        return this.ordersService.getPaymentConfirmed()
    }

}
