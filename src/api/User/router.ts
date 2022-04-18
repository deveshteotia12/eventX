import { Request, Response, Router, NextFunction } from 'express';
import { loginHandler, signUpHandler } from './controller';
import { validation } from '../../shared/middlewares/validation';
import { loginSchema, signUpSchema } from './schema';

export const userRoute = () => {
  const app = Router();
  app.post('/login', validation(loginSchema), handelLogin);
  app.post('/SignUp', validation(signUpSchema), handelSignUp);
};

const handelLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = await loginHandler(req.body, next);
    res.json({ success: true, msg: 'Successfully authenticated' });
  } catch (error) {
    res.json({ success: false, msg: 'some error has occured' });
  }
};

const handelSignUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await signUpHandler(req.body, next);
    res.json({ success: true, msg: 'User Successfully Signed Up' });
  } catch (error) {
    console.log(error);
    res.josn({ success: false, msg: 'some failure has occured' });
  }
};
