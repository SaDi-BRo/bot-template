import { bot } from '../core/bot.ts';
import { settingsCommand } from '../controller/index.ts';

bot.hears('⚙️ Settings', settingsCommand);
bot.hears('⚙️ Settings uz', settingsCommand);
