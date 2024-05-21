import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Brands, Roles } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(telegramId: string, nickname: string, username?: string): Promise<any> {
    const foundUser = await this.prisma.user.findFirst({
      where: { telegramId: BigInt(telegramId) }
    });
    if (foundUser) {
      return 'Пользователь уже зарегистрирован с айди ' + foundUser.telegramId.toString();
    } else {
      const user = await this.prisma.user.create({
        data: {
          telegramId: BigInt(telegramId),
          nickname,
          username: username || null,  // Здесь проверяем, есть ли username
        }
      });
      return { username: user.username, nickname: user.nickname, telegramId: user.telegramId.toString() };
    }
  }

  async login(telegramId: string): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { telegramId: BigInt(telegramId) }
    });
    if (!user) {
      return 'Пользователь не найден';
    }
    return 'Вы успешно вошли';
  }

  async setRole(userId: number, role: string): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { id: userId }
    });
    if (!user) {
      return 'Пользователь не найден';
    }

    if (!Object.values(Roles).includes(role as Roles)) {
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

    const brandsArray = brandsString.split(',').map(brand => brand.trim());

    const notifications = brandsArray.map(brand => {
      return Brands[brand as keyof typeof Brands] || null;
    }).filter(Boolean) as Brands[];

    if (notifications.length === 0) {
      return 'Некорректные бренды';
    }

    await this.prisma.user.update({
      where: { id: user.id },
      data: { notifications: { set: notifications } },
    });

    return 'Уведомления успешно обновлены';
  }

  async adminGetAll(): Promise<any> {
    const users = await this.prisma.user.findMany();
    return users.map(user => ({
      ...user,
      telegramId: user.telegramId.toString()
    }));
  }

  async adminGetById(userId: number): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return 'Пользователь не найден';
    }
    return {
      ...user,
      telegramId: user.telegramId.toString()
    };
  }
}
