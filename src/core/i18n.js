const telegraf = require('telegraf');
const TelegrafI18n = require('telegraf-i18n');
const path = require('path');
const bot = require('./bot');

const i18n = new TelegrafI18n({
  defaultLanguage: 'en',
  allowMissing: false, // Default true
  directory: path.resolve(__dirname, '../locales'),
  sessionName: 'session',
});

bot.use(i18n.middleware());
bot.use(telegraf.session());

module.exports = i18n;
