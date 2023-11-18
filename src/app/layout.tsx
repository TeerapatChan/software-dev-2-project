import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NextAuthProvider from '@/providers/NextAuthProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { EdgeStoreProvider } from '../libs/edgestore';
import ReduxProvider from '@/redux/ReduxProvider';

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
  const nextAuthSession = await getServerSession(authOptions);
  return (
    <html lang='en'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');
      </style>
      <body className='font-IBM'>
        <EdgeStoreProvider>
          <NextAuthProvider session={nextAuthSession}>
            {children}
          </NextAuthProvider>
        </EdgeStoreProvider>
      </body>
    </html>
  );
}
