import { Router, hears } from '../package/index.ts';
import { bot, MyContext } from '../core/bot.ts';
import {
  settingsKeyboard,
  langKeyboard,
  startKeyboard,
} from '../utils/customKeyboards.ts';

const router = new Router((ctx: MyContext) => ctx.session.step);

const settings = router.route('settings');

settings.filter(hears('settingsButton'), ctx => {
  ctx.reply(ctx.t('settingsMessage'), {
    reply_markup: settingsKeyboard(ctx),
  });
});

settings.filter(hears('changeLanguageButton'), ctx => {
  ctx.reply(ctx.t('changeLanguageMessage'), {
    reply_markup: langKeyboard(ctx),
  });
});

settings.filter(hears('backButton'), ctx => {
  ctx.reply(ctx.t('startMessage'), { reply_markup: startKeyboard(ctx) });
});

settings.filter(hears('uzButton'), async ctx => {
  await ctx.i18n.setLocale('uz');
  ctx.reply(ctx.t('changedLanguageMessage'), {
    reply_markup: startKeyboard(ctx),
  });
});

settings.filter(hears('ruButton'), async ctx => {
  await ctx.i18n.setLocale('ru');
  ctx.reply(ctx.t('changedLanguageMessage'), {
    reply_markup: startKeyboard(ctx),
  });
});

settings.filter(hears('enButton'), async ctx => {
  await ctx.i18n.setLocale('en');
  ctx.reply(ctx.t('changedLanguageMessage'), {
    reply_markup: startKeyboard(ctx),
  });
});

bot.use(router);
