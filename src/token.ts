import express,{NextFunction, Request,Response} from "express";
const jwt = require('jsonwebtoken');
const secret_code=process.env.TOKEN_SECRET || '';



export interface RequestCustom extends express.Request{
    dec: {user:{id: string, username: string}}
}

export function tokenCheck(req:Request, res:Response, next:NextFunction){
    try{   
        const custom_req = req as RequestCustom     
        const auth: string | undefined = custom_req.headers.authorization;
        const dec = jwt.verify(auth,secret_code);
        custom_req.dec = dec as {user:{id: string, username: string}}
        next();  
    }
    catch(error){
        res.status(401);
        res.json(`invalid token ${error}`)
        return false;
    }
}   