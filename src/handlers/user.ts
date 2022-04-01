import { Request, Response } from "express";
import { UsersStore } from "../models/user";
import { User } from "../models/user";
import jwt from "jsonwebtoken";
const secret_code=process.env.TOKEN_SECRET || '';

const store = new UsersStore();

export const create = async(req:Request, res:Response) => {
    try{
        let info = req.body;
        const user: User={
            first_name:info.first_name,
            last_name:info.last_name,
            user_name:info.user_name,
            password:info.password
        }
        let user_data = await store.create(user);

        const expass = user_data.password;
        const token = jwt.sign({ expass },secret_code);
        // Returning token
        res.json(token);
    }
    catch(err){
        res.json(err)
        res.status(400)
    }
}

export const index = async(req:Request, res:Response) => {
    try{
        res.json(await store.index());
        
    }catch(err){
        res.status(400)
        res.json(err)
    }
}

export const user_shower = async(req:Request, res:Response) => {
    try{
        console.log("id in handler user ",req.params.id);
        res.json(await store.show(req.params.id))
    }
    catch(err){
        res.status(400)
        res.json(err)
    }
}

export const authenticator = async(req:Request, res:Response) => {
    try{
        const token_info = req.body
        const scan = await store.authenticate(token_info.user_name, token_info.password);
        if(scan==null){
            res.status(400);
            res.send("invalid credentials");
        }
        else{
            const new_data =jwt.sign({scan},secret_code); 
            res.json(new_data);
        }
    }
    catch(err){
        res.json(err)
        res.status(400)
    }
}
