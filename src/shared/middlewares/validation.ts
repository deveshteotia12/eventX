import * as yup from 'yup';
import { Request, Response, NextFunction } from 'express';
import errorClass from '../errorClass';

export const validation = (schema: yup.AnyObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await schema.validate(req.body);
      req.body = data;
      next();
    } catch (error) {
      next(new errorClass('Validation Error', 400));
    }
  };
};
