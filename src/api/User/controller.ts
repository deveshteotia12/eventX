import database from '../../shared/database';
import errorClass from '../../shared/errorClass';
import { NextFunction } from 'express';
import { hash, compare } from 'bcrypt';
import { signJWT } from '../../shared/services/jwt';

export const loginHandler = async (data: any, next: NextFunction) => {
  try {
    const databaseResponse = await (await database()).collection('User').findOne({ email: data.email });
    if (!databaseResponse) Error('User does not exists');
    else if (!databaseResponse.isVerified) Error('User is not verified');
    const result = await compare(databaseResponse.password, data.password);
    if (!result) Error('Wrong credentials');
    const token = await signJWT({ email: databaseResponse.email });
    return token;
  } catch (error) {
    console.log(error);
    next(new errorClass(error.message, 400));
  }
};

export const signUpHandler = async (data: any, next: NextFunction) => {
  try {
    const databaseResponse = await (await database()).collection('User').findOne({ email: data.email });
    if (databaseResponse) {
      next(new errorClass('User already Exists', 412));
    }
    await (await database()).collection('User').insertOne(data);
  } catch (error) {
    next(new errorClass('There is Some error', 400));
  }
};
