import database from '../../shared/database';
import errorClass from '../../shared/errorClass';
import { NextFunction } from 'express';
import { hash, compare } from 'bcrypt';
import { signJWT } from '../../shared/services/jwt';

export const loginHandler = async (data: any, next: NextFunction) => {
  try {
    const databaseResponse = await (await database()).collection('User').findOne({ email: data.email });
    if (!databaseResponse) throw Error('User does not exists');
    //   else if (!databaseResponse.isVerified) throw Error('User is not verified');
    const result: boolean = await compare(data.password, databaseResponse.password);
    if (!result) throw Error('Wrong credentials');
    const token = await signJWT({ email: databaseResponse.email });
    return { token, ...databaseResponse };
  } catch (error) {
    throw { code: 400, message: error.message };
  }
};

export const signUpHandler = async (data: any, next: NextFunction) => {
  try {
    const databaseResponse = await (await database()).collection('User').findOne({ email: data.email });
    if (databaseResponse) {
      throw Error('User Already Exists');
    }
    const updatedPass = await hash(data.password, 15);
    await (await database()).collection('User').insertOne({ ...data, password: updatedPass });
  } catch (error) {
    throw { code: 400, message: error.message };
  }
};

export const eventReqHandler = async (data: any, userEmail) => {
  try {
    const docu = await (await database()).collection('eventReq').insertOne({ ...data, userEmail });

    await (await database())
      .collection('User')
      .updateOne({ email: userEmail }, { $push: { eventsReq: docu.insertedId } });
  } catch (error) {
    throw { code: 400, message: error.message };
  }
};

export const allEventHandler = async () => {
  try {
    const updatedData = await (
      await database()
    )
      .collection('eventReq')
      .find({ status: { $eq: '1' } })
      .toArray();
    return updatedData;
  } catch (error) {
    throw { code: 400, message: error.message };
  }
};
