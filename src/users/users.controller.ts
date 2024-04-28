import {Controller, Post, Body, Get, Logger} from '@nestjs/common';
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('register')
    async register(@Body() body: { telegramId: number, username?: string, nickname: string}): Promise<{ username: string, nickname: string, telegramId: number }> {
        const { username, nickname, telegramId } = body;
        const user = await this.usersService.createUser(telegramId, username, nickname);
        Logger.log('[USER FROM DB]',user)
        return { username: user.username, nickname: user.nickname, telegramId: user.telegramId };
    }

    @Get('register')
    async helloWorld() {
        return this.usersService.helloWorld()
    }
}