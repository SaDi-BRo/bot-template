import { MyContext } from '../core/bot.ts';
import { startKeyboard } from '../utils/customKeyboards.ts';

const startCommand = async (ctx: MyContext) => {
	await ctx.i18n.setLocale(
		ctx.session.__language_code || ctx.from?.language_code || 'en',
	);
	await ctx.reply(ctx.t('startMessage'), {
		reply_markup: startKeyboard(ctx),
	});
};

export { startCommand };
