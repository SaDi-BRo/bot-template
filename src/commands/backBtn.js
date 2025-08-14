const { Keyboard } = require('grammy');
const { bot } = require('../core/bot.js');
const { Router } = require('@grammyjs/router');
const { hears } = require('@grammyjs/i18n');

const router = new Router(ctx => ctx.session.step);

const backBtn = router.route('idle');

backBtn.filter(hears('back'), async ctx => {
  const keyboard = new Keyboard()
    .text(ctx.t('settingsBtn'))
    .row()
    .text(ctx.t('helpBtn'))
    .row()
    .resized()
    .oneTime();

  await ctx.reply(ctx.t('settingsTxt'), { reply_markup: keyboard });
});

bot.use(router);
