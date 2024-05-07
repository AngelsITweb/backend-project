import {Body, Controller, Get, Post, Headers, Param} from '@nestjs/common';
import {CartService} from "./cart.service";

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) {}

    @Get('')
    getAll(@Headers('user-id') userId: string) {
        return this.cartService.getAll(userId)
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        const cartId = parseInt(id, 10);
        return this.cartService.getById(cartId);
    }

    @Post('')
    createCart(@Body() body: any, @Headers('user-id') userId: string) {
        const parsedUserId = parseInt(userId, 10);
        return this.cartService.createCart(parsedUserId, body.partId);
    }
}
