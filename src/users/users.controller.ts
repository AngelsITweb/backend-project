import {Controller, Post, Body, Get, Logger, Headers} from '@nestjs/common';
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
    async setRole(@Body() body: { role: string }, @Headers('user-id') userId: string): Promise<any> {
        const { role } = body;
        const parsedUserId = parseInt(userId, 10);
        return await this.usersService.setRole(userId, role);
    }

    @Post('admin/notifications')
    async setNotifications(@Body() body: { brandsString: string, userId: string }): Promise<any> {
        const parsedUserId = parseInt(body.userId, 10);
        return await this.usersService.setNotifications(parsedUserId, body.brandsString);
    }

    @Get('admin/all')
    async adminGetAll(): Promise<any> {
        const users = await this.usersService.adminGetAll();
        return users.map((user) => ({
          ...user,
          telegramId: user.telegramId.toString(),
        }));
      }

}