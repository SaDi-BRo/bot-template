const bot = require('../core/bot.js');
const i18n = require('../core/i18n.js');
const { homeKeyboard } = require('../tools/keyboards.js');

bot.command('start', async ctx => {
  await ctx.reply(i18n.repository.en.greeting(), homeKeyboard);
});
