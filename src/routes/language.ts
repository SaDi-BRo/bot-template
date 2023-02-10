import { Router } from '../package/index.ts';
import { bot, MyContext } from '../core/bot.ts';

const router = new Router((ctx: MyContext) => ctx.session.step);

const settings = router.route('help');

settings.hears('Language', ctx => {
  console.log('Hello');
  ctx.reply('Helllooo');
});

bot.use(router);
