import { bot } from '../core/bot.ts';
import { settingsCommand } from '../controller/index.ts';
import { hears } from '../package/index.ts';

bot.filter(hears('settingsButton'), settingsCommand);
bot.command('settings', settingsCommand);
