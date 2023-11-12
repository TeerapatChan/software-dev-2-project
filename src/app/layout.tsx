import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MenuBar from '@/components/MenuBar';
import NextAuthProvider from '@/providers/NextAuthProvider';
import {getServerSession} from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { EdgeStoreProvider } from '../libs/edgestore';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const nextAuthSession = await getServerSession(authOptions)
  return (
    <html lang='en'>
      <body className={inter.className}>
        <EdgeStoreProvider>
        <NextAuthProvider session={nextAuthSession}>
        <MenuBar/>
        {children}
        </NextAuthProvider>
        </EdgeStoreProvider>
      </body>
    </html>
  );
}
