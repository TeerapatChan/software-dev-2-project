import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NextAuthProvider from '@/providers/NextAuthProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { EdgeStoreProvider } from '../providers/edgestore';
import getUserProfile from '@/libs/user/getUserProfile';
import StoreInitializer from '@/zustand/StoreInitializer';
import {
  useUserStore,
  useDentistStore,
  useMyBookingStore,
  useBookingsStore,
} from '@/zustand/store';
import getDentists from '@/libs/dentists/getDentists';
import getBookings from '@/libs/bookings/getBookings';
import { BookingItem } from '@/utils/interface';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Smile Clinic',
  description: 'Final Project for Software Development Practice 2',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  let user = null;
  let bookings = [];
  let myBooking = null;
  console.log('session:', session);
  if (session) {
    const userProfile = await getUserProfile(session.user.token);
    const { _id, name, email, tel, role } = userProfile.data;
    const token = session.user.token;
    const sessionUser = { _id, name, email, tel, role, token };
    const sessionBookings = (await getBookings(token)).data;
    const storeBookings = sessionBookings.map((booking: any) => {
      const { _id, bookingDate, user, dentist } = booking;
      const { name: dName, id: dId } = dentist;
      const newBooking = {
        _id,
        bookingDate,
        user,
        dentist: {
          name: dName,
          _id: dId,
        },
      };
      return newBooking;
    });
    useUserStore.getState().setUserProfile(sessionUser);
    useBookingsStore.getState().setBookings(storeBookings);

    const adminRole = role === 'admin';
    const selectedBooking = adminRole
      ? storeBookings.find((booking: BookingItem) => booking.user._id === _id)
      : storeBookings[0];
    useMyBookingStore.getState().setMyBooking(selectedBooking);
    myBooking = selectedBooking;

    user = sessionUser;
    bookings = storeBookings;
  } else {
    useUserStore.getState().setUserProfile(null);
    useMyBookingStore.getState().setMyBooking(null);
    console.log("Can't get session");
  }

  const dentists = (await getDentists()).data;
  useDentistStore.getState().setDentists(dentists);

  return (
    <html lang='en'>
      <body className='font-IBM'>
        <EdgeStoreProvider>
          <NextAuthProvider session={session}>
            <StoreInitializer
              userProfile={user}
              dentists={dentists}
              myBooking={myBooking}
              bookings={bookings}
            />
            {children}
          </NextAuthProvider>
        </EdgeStoreProvider>
      </body>
    </html>
  );
}
