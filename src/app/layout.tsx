import type { Metadata } from 'next';
import { League_Spartan, Roboto } from 'next/font/google';

import { GlobalStyles } from '@/app/styles/global';
import { StyledComponentsRegistry } from '@/app/config';

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${roboto.variable} ${leagueSpartan.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
