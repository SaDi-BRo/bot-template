const express = require('express');
const { Bot, session } = require('grammy');
require('dotenv').config();

if (!process.env.BOT_TOKEN) {
  throw new Error('BOT_TOKEN is not defined in the environment variables');
}

const bot = new Bot(process.env.BOT_TOKEN);
const app = express();

bot.use(session({ initial: () => ({ step: 'idle' }) }));
app.use(express.json());

app.post('/webhook', (req, res) => {
  bot.handleUpdate(req.body, res);
  res.sendStatus(200);
});

if (!process.env.ENVIRONMENT) {
  throw new Error(
    'ENVIRONMENT is not defined in the environment variables. Please set it to "development" or "production".'
  );
}

if (process.env.ENVIRONMENT === 'development') {
  bot.start();
}

if (process.env.ENVIRONMENT === 'production') {
  if (!process.env.WEBHOOK_URL) {
    throw new Error('WEBHOOK_URL is not defined in the environment variables');
  }
  app.listen(3000, async () => {
    console.log('Server is running on port 3000');
    await bot.api.setWebhook('https://simple-game-bot.onrender.com/webhook');
  });
}

module.exports = { bot };
