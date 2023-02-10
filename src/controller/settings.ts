import { MyContext } from '../core/bot.ts';
import { settingsKeyboard } from '../utils/customKeyboards.ts';

const settingsCommand = async (ctx: MyContext) => {
  await ctx.reply(ctx.t('settingsMessage'), {
    reply_markup: settingsKeyboard(ctx),
  });
  ctx.session.step = 'settings';
};

export { settingsCommand };
