import { Context, NextFunction } from '../package/index.ts';

const didMemberSubscribeChannel = async (ctx: Context, next: NextFunction) => {
	const { status } = await ctx.api.getChatMember(
		'-1001874750652',
		ctx.message!.from.id,
	);
	if (status !== 'member') {
		return await ctx.reply('You are not a subscriber of this channel');
	}
	await next();
};

export { didMemberSubscribeChannel };
