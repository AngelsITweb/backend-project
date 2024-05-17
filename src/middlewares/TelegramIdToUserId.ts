import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import {PrismaService} from "../../prisma/prisma.service";

@Injectable()
export class AddUserIdMiddleware implements NestMiddleware {
    constructor(private readonly prisma: PrismaService) {}

    async use(req: Request, res: Response, next: NextFunction) {
        try {
            const url = req.originalUrl;
            const isImageRequest = url.startsWith('/api/uploads');
            const isRegistration = url.includes('register');
            const isAdmin = url.includes('admin');
            const registrationRequest = req.headers['registration-request'];
            if (isImageRequest || isRegistration || isAdmin || registrationRequest) {
                return next();
            }
            const telegramId = req.headers['telegram-id'];

            if (!telegramId) {
                return res.status(408).json({ error: 'Telegram ID not provided in headers' });
            }

            const user = await this.prisma.user.findFirst({
              where: {
                telegramId: BigInt(telegramId as string),
              },
            });


            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            req.headers['user-id'] = user.id.toString();

            next();
        } catch (error) {
            console.error('Error in AddUserIdMiddleware:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
