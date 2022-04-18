import * as yup from 'yup';

export const signUpSchema = new yup.ObjectSchema({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  isVerified: yup.boolean().default(false).notRequired(),
});

export const loginSchema = new yup.ObjectSchema({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
