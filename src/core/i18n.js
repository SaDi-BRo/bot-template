const { I18n } = require('@grammyjs/i18n');
const path = require('path');
const { bot } = require('./bot');

const i18n = new I18n({
  defaultLocale: 'en',
  directory: path.resolve(__dirname, '../locales'),
  useSession: true,
});

bot.use(i18n);
