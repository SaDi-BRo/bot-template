const bot = require('../core/bot.js');
const i18n = require('../core/i18n.js');
const { settingsKeyboard } = require('../tools/keyboards.js');

bot.hears(i18n.repository.en.homeButtons.settings(), async ctx => {
  await ctx.reply(i18n.repository.en.settings(), settingsKeyboard);
});
