import { PrismaService } from '../../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(telegramId: string, nickname: string, username?: string): Promise<any>;
    login(telegramId: string): Promise<any>;
    setRole(telegramId: string, role: string): Promise<any>;
    setNotifications(userId: number, brandsString: string): Promise<any>;
    adminGetAll(): Promise<any>;
}
