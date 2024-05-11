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
        role: string;
        userId: string;
    }): Promise<any>;
    setNotifications(body: {
        brandsString: string;
        userId: string;
    }): Promise<any>;
    adminGetAll(): Promise<any>;
    adminGetById(userId: string): Promise<any>;
}
