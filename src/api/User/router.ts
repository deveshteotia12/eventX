import { Request, Response, Router, NextFunction } from 'express';
import { allEventHandler, eventReqHandler, loginHandler, signUpHandler } from './controller';
import { validation } from '../../shared/middlewares/validation';
import { eventRequest, loginSchema, signUpSchema } from './schema';
import errorClass from '../../shared/errorClass';
import { authMiddleware } from '../../shared/middlewares/auth';

export const userRoute = () => {
  const app = Router();
  app.post('/login', validation(loginSchema), handelLogin);
  app.post('/SignUp', validation(signUpSchema), handelSignUp);
  app.post('/eventReq', validation(eventRequest), authMiddleware, handelEvent);
  app.get('/allEvents', authMiddleware, handelAllEvent);
  return app;
};

const handelLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('I am here');
    const data = await loginHandler(req.body, next);
    res.json({ success: true, data });
  } catch (error) {
    next(new errorClass(error.message, error.code));
  }
};

const handelSignUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await signUpHandler(req.body, next);
    res.json({ success: true, msg: 'User Successfully Signed Up' });
  } catch (error) {
    next(new errorClass(error.message, error.code));
  }
};

const handelEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await eventReqHandler(req.body, req.user.email);
    res.json({ success: true, msg: 'Event Req Saved Successfully' });
  } catch (error) {
    console.log(error);
    next(new errorClass(error.message, error.code));
  }
};

const handelAllEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await allEventHandler();
    res.json({ success: true, data });
  } catch (error) {
    console.log(error);
    next(new errorClass(error.message, error.code));
  }
};
