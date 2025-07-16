import BotButtonWithDialog from '@/components/Landing-page/BotButton';
import Navbar from '@/components/Landing-page/Navbar';
import { routing } from '@/i18n/routing';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
            <Navbar/>
            {children}
            <BotButtonWithDialog/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}