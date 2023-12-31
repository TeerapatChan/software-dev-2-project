'use client';
import { Button } from '@mui/material';
import { signOut } from 'next-auth/react';

export default function SignOut() {
  const signOutHandler = () => {
    localStorage.removeItem('user-storage');
    localStorage.removeItem('myBooking-storage');
    console.log('sign out');
    signOut({ callbackUrl: '/' });
  };
  return (
    <main>
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
      <div className='bg-[#F3F3F3] h-screen w-full flex justify-center items-center'>
        <div
          className='flex flex-col justify-center items-center bg-white w-2/6 h-1/4 
        shadow-lg rounded-2xl text-3xl text-black gap-8 text-center'
        >
          Do you want to sign out?
          <Button
            type='submit'
            variant='contained'
            className='bg-sky-600 w-[50%]'
            size='large'
            onClick={() => signOutHandler()}
          >
            Sign out
          </Button>
        </div>
      </div>
    </main>
  );
}
