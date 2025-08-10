const bot = require('../core/bot.js');
const i18n = require('../core/i18n.js');

bot.command('help', async ctx => {
  await ctx.reply(i18n.repository.en.help());
});
