import * as yup from 'yup';
import PhoneRegex from './PhoneRegex';

const BookingYup = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  tel: yup
    .string()
    .required('Tel. is required')
    .matches(PhoneRegex, 'Tel. is not valid')
    .length(10, 'Tel. must be exactly 10 digits'),
});

const SignupYup = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  tel: yup
    .string()
    .required('Tel. is required')
    .matches(PhoneRegex, 'Tel. is not valid')
    .length(10, 'Tel. must be exactly 10 digits'),
  password: yup.string().required(),
});

const LoginYup = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const DentistYup = yup.object().shape({
  name: yup.string().required(),
  tel: yup
    .string()
    .required('Tel. is required')
    .matches(PhoneRegex, 'Tel. is not valid'),
  hospital: yup.string().required(),
  expertist: yup.string().required(),
  address: yup.string().required(),
});

export { BookingYup, SignupYup, LoginYup, DentistYup };
