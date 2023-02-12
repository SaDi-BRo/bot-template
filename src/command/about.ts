import { bot } from '../core/bot.ts';
import { aboutCommand } from '../controller/index.ts';
import { hears } from '../package/index.ts';

bot.filter(hears('aboutButton'), aboutCommand);
bot.command('about', aboutCommand);
