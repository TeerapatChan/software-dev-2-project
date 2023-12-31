'use client';
import CreatePopup from '@/components/dialogs/create/CreatePopup';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { dentistsProps } from '@/utils/interface';

export default function CreateDialog({
  defaultDentist,
  token,
}: {
  defaultDentist: string;
  token: string;
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
        Make a booking
      </Button>
      <CreatePopup
        open={open}
        onClose={handleClose}
        defaultDentist={defaultDentist}
        token={token}
      />
    </>
  );
}
