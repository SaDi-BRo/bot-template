import { bot } from '../core/bot.ts';
import { startCommand } from '../controller/index.ts';

bot.command('start', startCommand);
