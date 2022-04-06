import {Router,Response,Request} from 'express';
import { homeRoute } from './homePage/router';


export const handelRoute=()=>{
    const app=Router();
    
    app.use("/",homeRoute);
    
}