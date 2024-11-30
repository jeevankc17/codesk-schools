import type { Metadata } from 'next';
import { Rethink_Sans } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const inter = Rethink_Sans({
  subsets: ['latin'],
  display: 'swap',
});
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
