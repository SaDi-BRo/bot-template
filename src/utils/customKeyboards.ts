import { Keyboard } from '../package/index.ts';
import { MyContext } from '../core/bot.ts';

const startKeyboard = (ctx: MyContext) =>
  new Keyboard()
    .text(ctx.t('settingsButton'))
    .text(ctx.t('helpButton'))
    .text(ctx.t('aboutButton'))
    .row()
    .oneTime()
    .resized();

const settingsKeyboard = (ctx: MyContext) =>
  new Keyboard()
    .text(ctx.t('changeLanguageButton'))
    .row()
    .text(ctx.t('backButton'))
    .row()
    .oneTime()
    .resized();

const langKeyboard = (ctx: MyContext) =>
  new Keyboard()
    .text(ctx.t('uzButton'))
    .text(ctx.t('ruButton'))
    .text(ctx.t('enButton'))
    .row()
    .resized();

export { startKeyboard, langKeyboard, settingsKeyboard };
