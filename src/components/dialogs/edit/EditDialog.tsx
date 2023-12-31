'use client';
import EditPopup from '@/components/dialogs/edit/EditPopup';
import { useState } from 'react';
import { Button } from '@mui/material';
import { dentistsProps } from '@/utils/interface';

export default function CreateDialog({
  defaultDentist,
  token,
  bookingID,
}: {
  defaultDentist: string;
  token: string;
  bookingID: string;
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        variant='contained'
        className='bg-sky-600 w-full '
        onClick={handleOpen}
      >
        Edit
      </Button>
      <EditPopup
        open={open}
        onClose={handleClose}
        defaultDentist={defaultDentist}
        token={token}
        bookingID={bookingID}
      />
    </>
  );
}
