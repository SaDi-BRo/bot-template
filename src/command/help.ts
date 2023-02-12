import { bot } from '../core/bot.ts';
import { helpCommand } from '../controller/index.ts';
import { hears } from '../package/index.ts';

bot.filter(hears('helpButton'), helpCommand);
bot.command('help', helpCommand);
