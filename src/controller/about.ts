import { MyContext } from '../core/bot.ts';

const aboutCommand = async (ctx: MyContext) => {
	await ctx.reply(ctx.t('aboutMessage'));
};

export { aboutCommand };
