import type { Metadata } from 'next';
import { League_Spartan, Roboto } from 'next/font/google';
import './styles/globals.css';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

const leagueSpartan = League_Spartan({
  variable: '--font-league-spartan',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Lista de Tarefas',
  description:
    'Uma aplicação moderna de lista de tarefas construída com Next.js 15',
  manifest: '/manifest.json',
  icons: [
    {
      url: '/icons/icon-192x192.svg',
      sizes: '192x192',
      type: 'image/svg+xml',
    },
    {
      url: '/icons/icon-512x512.svg',
      sizes: '512x512',
      type: 'image/svg+xml',
    },
  ],
};

export const viewport = {
  themeColor: '#0E89FF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#0E89FF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Lista de Tarefas" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.svg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={` ${roboto.variable} ${leagueSpartan.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
