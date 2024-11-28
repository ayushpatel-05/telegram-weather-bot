import "reflect-metadata";
import "dotenv/config";
import { initializeDataSource } from "./config/data-source.js";
import { bot } from "./config/bot.js";
import { initializeBotHandlers } from "./services/botService.js";
// import { Bot } from "grammy";



const startServer = async () => {
    let userId:number|undefined;
    await initializeDataSource();

    // Initialize bot handlers
    initializeBotHandlers();

    // Start the bot
    bot.start();
    console.log("Bot is up and running!");

  };


startServer();