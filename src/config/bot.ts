import { Bot } from "grammy";

// Bot instance
export const bot = new Bot(process.env.BOT_TOKEN ?? "botToken");