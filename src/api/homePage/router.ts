import {Router,Request,Response} from 'express';


export const homeRoute=()=>{
    const app=Router();
    app.get("/",handelGet)

    return app;
}

const handelGet=(req : Request,res: Response)=>{
    try{
         res.send({success: true, msg: "This is runnninh"})
    }catch(error){
       console.log(error);
       res.json({success: false,msg: "This is error"})
    }
}