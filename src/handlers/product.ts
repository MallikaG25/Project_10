import { Request, Response } from "express";
import { createProduct } from "../models/product";
import { product, productStore } from "../models/product";

const store = new productStore();

export const create = async(req:Request, res:Response) => {
    try{
        const data:createProduct = {
            name : req.body.name,
            price : req.body.price,
            id : req.body.id,
        }
        res.json(await store.create(data));
    }
    catch(err){
        res.json(err);
        res.status(400);
    }
}

export const product_shower = async (req:Request,res:Response) => {
    try{
        const tmp = req.params.id;
        res.json(await store.show(tmp));
    }
    catch(err){
        res.status(400);
        res.json(err);
    }
}

export const index = async (req:Request, res:Response) => {
    try{
        res.json(store.index());
    }
    catch(err){
        res.json(err);
        res.status(400);
    }
}
