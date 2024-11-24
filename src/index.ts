import "dotenv/config";
import { initializeDataSource } from "./config/data-source";
import { bot } from "./config/bot";



const startServer = async () => {
    await initializeDataSource();

    // Handle the /start command.
    bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
    // Handle other messages.
    bot.on("message", (ctx) => ctx.reply("Got another message!"));


    // Start the bot.
    bot.start();

  };


startServer();