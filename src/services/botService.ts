import { bot } from "../config/bot";

// Handles the /start command
const handleStartCommand = () => {
  bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
};

// Handles the /subscribe command
const handleSubscribeCommand = () => {
  bot.command("subscribe", async (ctx) => {
    const userId = ctx.from?.id;
    console.log(`User subscribed: ${userId}`);
    await ctx.reply("You have been subscribed to the weather update bot!");
  });
};

// Handles other types of messages
const handleOtherMessages = () => {
  bot.on("message", async (ctx) => {
    try {
      const userId = ctx.from?.id;
      const chat = await ctx.getChat();
      console.log(`Received a message from user: ${userId} in chat:`, chat);
      await ctx.reply("Got another message!");
    } catch (error) {
      console.error("An error occurred while processing a message:", error);
    }
  });
};

// Initializes all bot handlers
export const initializeBotHandlers = () => {
  handleStartCommand();
  handleSubscribeCommand();
  handleOtherMessages();
};
