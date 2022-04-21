import { Request, Response, Router, NextFunction } from 'express';
import { eventReqHandler, handelAcceptReq, handelrejectReq, handelremoveReq, upcomingReqHandler } from './controller';
import { validation } from '../../shared/middlewares/validation';
//import { eventRequest, loginSchema, signUpSchema } from './schema';
import errorClass from '../../shared/errorClass';
import { authMiddleware } from '../../shared/middlewares/auth';

export const adminRoute = () => {
  const app = Router();
  //   app.post('/login', validation(loginSchema), handelLogin);
  //   app.post('/SignUp', validation(signUpSchema), handelSignUp);
  app.get('/eventReq', handelEvent);
  app.post('/rejectReq', handelReject);
  app.post('/acceptReq', handelAccept);
  app.post('/removeReq', handelRemove);
  app.get('/upcomingEvents', handelUpcoming);
  return app;
};

const handelEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await eventReqHandler();
    res.json({ success: true, data });
  } catch (error) {
    next(new errorClass(error.message, error.code));
  }
};

const handelUpcoming = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await upcomingReqHandler();
    res.json({ success: true, data });
  } catch (error) {
    next(new errorClass(error.message, error.code));
  }
};

const handelAccept = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await handelAcceptReq(req.body);
    res.json({ success: true, data });
  } catch (error) {
    next(new errorClass(error.message, error.code));
  }
};

const handelReject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await handelrejectReq(req.body);
    res.json({ success: true, data });
  } catch (error) {
    next(new errorClass(error.message, error.code));
  }
};

const handelRemove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await handelremoveReq(req.body);
    res.json({ success: true, data });
  } catch (error) {
    next(new errorClass(error.message, error.code));
  }
};
