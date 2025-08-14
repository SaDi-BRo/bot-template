const { Keyboard } = require('grammy');
const { bot } = require('../core/bot.js');
const { Router } = require('@grammyjs/router');

const router = new Router(ctx => ctx.session.step);

const start = router.route('idle');

start.command('start', async ctx => {
  const keyboard = new Keyboard()
    .text(ctx.t('settingsBtn'))
    .row()
    .text(ctx.t('helpBtn'))
    .row()
    .resized()
    .oneTime();

  await ctx.reply(ctx.t('greeting'), { reply_markup: keyboard });
});

bot.use(router);
