import { bot } from '../core/bot.ts';
import { startCommand } from '../controller/index.ts';
import { didMemberSubscribeChannel } from '../middleware/index.ts';

bot.command('start', startCommand);
