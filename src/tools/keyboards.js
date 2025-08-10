const { Markup } = require('telegraf');
const i18n = require('../core/i18n.js');

const homeKeyboard = Markup.keyboard([
  [i18n.repository.en.homeButtons.settings()],
  [i18n.repository.en.homeButtons.help()],
]);

const settingsKeyboard = Markup.keyboard([
  Markup.button.text('Change Language'),
  Markup.button.text('Back to Home'),
]);

const helpKeyboard = Markup.keyboard([
  Markup.button.text('FAQ'),
  Markup.button.text('Contact Support'),
  Markup.button.text('Back to Home'),
]);

module.exports = {
  homeKeyboard,
  settingsKeyboard,
  helpKeyboard,
};
