import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import { config } from '@/config/app.config';

export const metadata: Metadata = {
  title: config.appName,
  description: 'Next + Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
