import { MyContext } from '../core/bot.ts';

const helpCommand = async (ctx: MyContext) => {
	await ctx.reply(ctx.t('helpMessage'));
};

export { helpCommand };
