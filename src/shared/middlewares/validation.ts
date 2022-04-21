import * as yup from 'yup';
import { Request, Response, NextFunction } from 'express';
import errorClass from '../errorClass';

export const validation = (schema: yup.AnyObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body);
      const data = await schema.validate(req.body);
      req.body = data;
      next();
    } catch (error) {
      console.log(error);
      next(new errorClass('Validation Error', 400));
    }
  };
};
