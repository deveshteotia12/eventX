import { verifyJWT } from '../services/jwt';
import { Request, Response, NextFunction } from 'express';
import errorClass from '../errorClass';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.headers);
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null) throw Error('Invalid Request');
    const payload = await verifyJWT(token);
    req.user = payload;
    next();
  } catch (error) {
    next(new errorClass('User in not Authorized', 401));
  }
};
