import { Router } from '../package/index.ts';
import { bot, MyContext } from '../core/bot.ts';
import {
  settingsKeyboard,
  langKeyboard,
  startKeyboard,
} from '../utils/customKeyboards.ts';

const router = new Router((ctx: MyContext) => ctx.session.step);

const settings = router.route('settings');

settings.hears('⚙️ Settings', ctx => {
  ctx.reply(ctx.t('settingsMessage'), {
    reply_markup: settingsKeyboard(ctx),
  });
});

settings.hears('Language', ctx => {
  ctx.reply(ctx.t('changeLanguageMessage'), {
    reply_markup: langKeyboard(ctx),
  });
});

settings.hears('🇺🇿 Uzbek', async ctx => {
  await ctx.i18n.setLocale('uz');
  ctx.reply('Changed uzbek');
});

settings.hears('🏴󠁧󠁢󠁥󠁮󠁧󠁿 English', async ctx => {
  await ctx.i18n.setLocale('en');
  ctx.reply(ctx.t('changedLanguageMessage'), {
    reply_markup: startKeyboard(ctx),
  });
});

bot.use(router);
