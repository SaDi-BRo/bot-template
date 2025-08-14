const { InlineKeyboard, Keyboard } = require('grammy');
const { bot } = require('../core/bot.js');
const { Router } = require('@grammyjs/router');
const { hears } = require('@grammyjs/i18n');

const router = new Router(ctx => ctx.session.step);

const chooseLang = router.route('idle');

chooseLang.filter(hears('changeLanguage'), async ctx => {
  const keyboard = new InlineKeyboard()
    .text(ctx.t('english'), 'en')
    .row()
    .text(ctx.t('russian'), 'ru')
    .row()
    .text(ctx.t('uzbek'), 'uz')
    .row();

  await ctx.reply(ctx.t('chooseLanguage'), { reply_markup: keyboard });
});

chooseLang.callbackQuery('en', async ctx => {
  const keyboard = new Keyboard()
    .text(ctx.t('settingsBtn'))
    .row()
    .text(ctx.t('helpBtn'))
    .row()
    .resized()
    .oneTime();

  await ctx.deleteMessage();
  await ctx.i18n.setLocale('en');
  await ctx.reply(ctx.t('changedLanguage'), { reply_markup: keyboard });
});

chooseLang.callbackQuery('uz', async ctx => {
  const keyboard = new Keyboard()
    .text(ctx.t('settingsBtn'))
    .row()
    .text(ctx.t('helpBtn'))
    .row()
    .resized()
    .oneTime();

  await ctx.deleteMessage();
  await ctx.i18n.setLocale('uz');
  await ctx.reply(ctx.t('changedLanguage'), { reply_markup: keyboard });
});

bot.use(router);
