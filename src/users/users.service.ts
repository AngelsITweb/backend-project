import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {Brands, Roles} from "@prisma/client";

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async createUser(telegramId: string, nickname: string, username?: string ): Promise<any> {
        const foundUser = await this.prisma.user.findFirst({
            where: { telegramId: BigInt(telegramId) }
        })
        if (foundUser) {
            return 'Пользователь уже зарегистрирован с айди' + foundUser.telegramId
        } else {
            const user = await this.prisma.user.create({
                data: {
                    telegramId: BigInt(telegramId), // Приводим к BigInt
                    nickname,
                    username,
                }
            });
            return { username: user.username, nickname: user.nickname, telegramId: user.telegramId.toString() };
        }
    }

    async login(telegramId: string): Promise<any> {
        const user = await this.prisma.user.findFirst({
            where: { telegramId: BigInt(telegramId) } // Приводим к BigInt
        });
        if (!user) {
            return 'Пользователь не найден';
        }
        return 'Вы успешно вошли';
    }

    async setRole(telegramId: string, role: string): Promise<any> {
        const user = await this.prisma.user.findFirst({
            where: { telegramId: BigInt(telegramId) } // Приводим к BigInt
        });
        if (!user) {
            return 'Пользователь не найден';
        }

        if (!(role in Roles)) {
            return 'Некорректная роль';
        }

        const updatedUser = await this.prisma.user.update({
            where: { id: user.id },
            data: { role: role as Roles }
        });

        return 'Роль успешно обновлена';
    }

    async setNotifications(userId: number, brandsString: string): Promise<any> {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            return 'Пользователь не найден';
        }

        const brandsArray = brandsString.split(",").map(brand => brand.trim());

        const notifications = brandsArray.map(brand => {
            if (Brands[brand as keyof typeof Brands]) {
                return Brands[brand as keyof typeof Brands];
            } else {
                return null;
            }
        }).filter(brand => brand !== null) as Brands[];

        const updatePromises = notifications.map(brand =>
            this.prisma.user.update({
                where: { id: user.id },
                data: { notifications: { push: [brand] } } // Обновляем только один бренд
            })
        );

        await Promise.all(updatePromises);

        return 'Уведомления успешно обновлены';
    }


}