const { Bot } = require("grammy");

require("dotenv/config");

const token = process.env.TOKEN,
  bot = new Bot(token);

bot.on(["message:left_chat_member", "message:new_chat_members"], async (ctx) => {
  await ctx.deleteMessage().catch(async (error) => {
    if (error.response) {
    }
    ctx.reply("Bot ishlashi uchun unga admin huquqi kerak va deleteMessage yoqiq bo'lishi shart").catch(async (error) => {
      if (error.response) {
      }
    });
  });
});

bot.start();
