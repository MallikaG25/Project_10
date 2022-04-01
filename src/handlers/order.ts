import { orderStore } from "../models/order";
import { order,createOrder} from "../models/order";
import { Request, Response } from "express";

const store = new orderStore();

export const index = async (req:Request, res:Response) => {
        try{
            const data = await store.index();
            res.json(data);
        }
        catch(error){
            res.json(error);
            res.status(400);
        }
    }

export const create = async(req:Request, res:Response) => {
    try{
        const quantity = req.body.quantity;
        const userid = req.body.user_id;
        const status = req.body.status;
        const data:createOrder = { 
            quantity : quantity,
            user_id : userid,
            status : status,
        }
        res.json(await store.create(data));
    }
    catch(error){
        res.status(400);
        res.json(error);
    }
}

export const order_shower = async (req:Request, res:Response) => {
    try{
        res.json(await store.show(req.params.id))
    }
    catch(error){
        res.status(400)
        res.json(error);
    }
}
