const { Keyboard } = require('grammy');
const { bot } = require('../core/bot.js');
const { Router } = require('@grammyjs/router');
const { hears } = require('@grammyjs/i18n');

const router = new Router(ctx => ctx.session.step);

const help = router.route('idle');

help.filter(hears('helpBtn'), async ctx => {
  const keyboard = new Keyboard()
    .text(ctx.t('settingsBtn'))
    .row()
    .text(ctx.t('helpBtn'))
    .row()
    .resized()
    .oneTime();

  await ctx.reply(ctx.t('helpTxt'), { reply_markup: keyboard });
});

bot.use(router);
