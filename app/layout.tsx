'use client';
import './globals.scss';
import { UIShell } from '@/components';
import { ThemeProvider } from '@/contexts';
import { Analytics } from '@vercel/analytics/react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <html lang="en">
        <head>
          <title>Carbon + Next.js</title>
        </head>
        <body>
          <Analytics />
          <UIShell content={children} />
        </body>
      </html>
    </ThemeProvider>
  );
};
export default RootLayout;
