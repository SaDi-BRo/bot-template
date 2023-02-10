import {
  Bot,
  Context,
  I18n,
  I18nFlavor,
  session,
  SessionFlavor,
} from '../package/index.ts';
import 'https://deno.land/x/dotenv@v3.2.0/load.ts';

interface SessionData {
  step: 'start' | 'help' | 'settings' | 'changeLang';
  __language_code?: string;
}

type MyContext = Context & SessionFlavor<SessionData> & I18nFlavor;

const bot = new Bot<MyContext>(Deno.env.get('BOT_TOKEN')!);

const i18n = new I18n<MyContext>({
  defaultLocale: 'en',
  useSession: true,
  directory: './src/locales',
});

bot.use(
  session({
    initial: (): SessionData => ({ step: 'start' }),
  })
);

bot.use(i18n);

bot.start();

export { bot };
export type { MyContext };
