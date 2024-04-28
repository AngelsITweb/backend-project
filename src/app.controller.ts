import {Ctx, Start, Update} from "nestjs-telegraf";
import {Context} from "telegraf";
import fetch from 'node-fetch';
import {Logger} from "@nestjs/common";
import axios from "axios";

const logger = new Logger()
const $api = 'http://localhost:3000/users/register'

@Update()
export class AppController {
  @Start()
  async start(@Ctx() ctx: Context) {
    await ctx.reply('Регистрирую вас...');
    const telegramId = ctx.from.id;
    const username = ctx.from.username;
    const nickname = ctx.from.first_name;
    const res = await axios.post($api, {telegramId, username, nickname});
    console.log(ctx.message.from)
    await ctx.reply(`Вы зарегестрированны: ${res.data.username} ${res.data.nickname} ${res.data.telegramId}`);
  }
}
