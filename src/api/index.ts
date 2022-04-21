import { Router, Response, Request } from 'express';
import { adminRoute } from './Admin/router';
import { homeRoute } from './homePage/router';
import { userRoute } from './User/router';

export const handelRoute = () => {
  const app = Router();
  app.use('/', userRoute());
  app.use('/admin', adminRoute());
  return app;
};
