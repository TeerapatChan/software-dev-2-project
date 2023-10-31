'use client';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { LoginYup } from '@/utils/YupSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomTextField from '../CustomTextField';
import { LoginSchema } from '@/utils/FormSchema';

export default function SignInForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: yupResolver(LoginYup),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const formSubmit = (data: LoginSchema) => {
    console.log(data);
  };
  return (
    <form
      className='h-1/2 w-4/5 flex flex-col gap-5 items-center justify-center'
      onSubmit={handleSubmit(formSubmit)}
    >
      <div className='w-4/5 flex flex-col gap-5 items-start'>
        <CustomTextField props={{ control, errors, label: 'email' }} />
        <CustomTextField
          props={{ control, errors, label: 'password', type: 'password' }}
        />
        <Button
          type='submit'
          variant='contained'
          className='bg-sky-600 w-full'
          size='large'
        >
          Log In
        </Button>
        <div className='self-center'>
          Don't have account?
          <Link
            href='/mock-signup'
            className='text-blue-900 font-medium hover:text-blue-800'
          >
            {' '}
            Sign up here
          </Link>
        </div>
      </div>
    </form>
  );
}
