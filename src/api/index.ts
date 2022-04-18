import { Router, Response, Request } from 'express';
import { homeRoute } from './homePage/router';
import { userRoute } from './User/router';

export const handelRoute = () => {
  const app = Router();
  app.use('/', userRoute);
  return app;
};
