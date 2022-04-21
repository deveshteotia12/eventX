import errorClass from '../errorClass';
import { Request, Response, NextFunction } from 'express';

//ERROR HANDLING MIDDLEWARE
export const errorHandler = (error, req: Request, res: Response, next: NextFunction) => {
  try {
    const status = error.statusCode || 500;
    const message = error.message || 'Something Wrong Happened';
    res.json({ success: false, message });
  } catch (error) {
    console.log(error);
  }
};
