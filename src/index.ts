import { Bot } from "grammy";
import "dotenv/config";


// Bot instance
const bot = new Bot(process.env.BOT_TOKEN ?? "botToken");



// Handle the /start command.
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
// Handle other messages.
bot.on("message", (ctx) => ctx.reply("Got another message!"));


// Start the bot.
bot.start();

