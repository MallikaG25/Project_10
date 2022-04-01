import express from 'express';
import { tokenCheck } from '../token';

import {create,index,user_shower,authenticator} from '../handlers/user';

const userRouter = (app:express.Application)=>{
    app.post("/users",tokenCheck, create);
    app.get("/users",tokenCheck,index);
    app.get("/users/:id",tokenCheck,user_shower);
    app.post("/users/authenticate",tokenCheck,authenticator);
}

export default userRouter;