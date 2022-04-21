import * as yup from 'yup';

export const signUpSchema = new yup.ObjectSchema({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  isVerified: yup.boolean().default(false).notRequired(),
  eventsHosted: yup.array().default([]).notRequired(),
  eventsParticipated: yup.array().default([]).notRequired(),
  eventsReq: yup.array().default([]).notRequired(),
});

export const loginSchema = new yup.ObjectSchema({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const eventRequest = new yup.ObjectSchema({
  eventName: yup.string().required(),
  eventType: yup.string().required(),
  about: yup.string().required(),
  discordServerLink: yup.string().required(),
  websiteLink: yup.string().required(),
  eventDate: yup.date().required(),
  location: yup.string().required(),
  status: yup.string().default('0').notRequired(),
});
