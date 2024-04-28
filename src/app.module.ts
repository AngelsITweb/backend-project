import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import * as LocalSession from 'telegraf-session-local';
import { PrismaService } from '../prisma/prisma.service';

const session = new LocalSession({ database: 'session.db.json' });

@Module({
    providers: [AppController, PrismaService],
    controllers: [],
    imports: [
        TelegrafModule.forRoot({
            middlewares: [session.middleware()],
            token: '7045135748:AAF8RXjROq9mlRCeOyYmqA-0wKhznjIjoug'
        }),
        UsersModule
    ],
})
export class AppModule {}
