import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(body: {
        telegramId: string;
        username?: string;
        nickname: string;
    }): Promise<any>;
    login(body: {
        telegramId: string;
    }): Promise<any>;
    setRole(body: {
        telegramId: string;
        role: string;
    }): Promise<any>;
    setNotifications(body: {
        telegramId: string;
        brandsString: string;
    }): Promise<any>;
}
