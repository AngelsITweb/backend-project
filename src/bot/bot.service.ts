// bot.service.ts
import { Injectable } from '@nestjs/common';
import { Telegraf } from 'telegraf';

@Injectable()
export class BotService {
    private readonly bot: Telegraf;

    constructor() {
        this.bot = new Telegraf('7066498966:AAGe0PJTKhty_1S-8gy7016myjsIfYztT0Q');

        this.bot.launch().then(() => {
            console.log('Bot started successfully');
        }).catch(err => {
            console.error('Bot launch error:', err);
        });
    }

    async sendMessage(chatId: bigint, message: string, webAppUrl: string): Promise<void> {
        await this.bot.telegram.sendMessage(chatId.toString(), message, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Открыть в приложении', web_app: { url: webAppUrl } }],
                ],
            },
        });
    }
}
