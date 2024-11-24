import { Bot } from "grammy";

export default function sendMessage(userId: number, message: string, bot: Bot) {
    if(userId)
        bot.api.sendMessage(userId, "The weather is nice");
}