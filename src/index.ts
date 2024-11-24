import "dotenv/config";
import { initializeDataSource } from "./config/data-source";
import { bot } from "./config/bot";
import { initializeBotHandlers } from "./services/botService";
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