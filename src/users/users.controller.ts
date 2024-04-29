import {Controller, Post, Body, Get, Logger} from '@nestjs/common';
import { UsersService } from "./users.service";

@Controller('/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('register')
    async register(@Body() body: { telegramId: string, username?: string, nickname: string}): Promise<any> {
        return await this.usersService.createUser(body.telegramId, body.username, body.nickname);
    }

    @Post('login')
    async login(@Body() body: { telegramId: string }): Promise<any> {
        const { telegramId } = body;
        return await this.usersService.login(telegramId);
    }

    @Post('setRole')
    async setRole(@Body() body: { telegramId: string, role: string }): Promise<any> {
        const { telegramId, role } = body;
        return await this.usersService.setRole(telegramId, role);
    }

    @Post('setNotifications')
    async setNotifications(@Body() body: { telegramId: string, brandsString: string }): Promise<any> {
        const { telegramId, brandsString } = body;
        return await this.usersService.setNotifications(telegramId, brandsString);
    }
}