import { sign, verify } from 'jsonwebtoken';
import config from '../../config/index';

export const signJWT = async (payload: any) => {
  return await sign(payload, config.secretJWT);
};

export const verifyJWT = async (token: any): Promise<any> => {
  return await verify(token, config.secretJWT);
};
