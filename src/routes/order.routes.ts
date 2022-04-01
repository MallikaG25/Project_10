import express from "express";
import { tokenCheck } from '../token';

import {index} from '../handlers/order';
import {create} from '../handlers/order';
import {order_shower} from '../handlers/order';

const OrderRoutes = (app:express.Application) => {
    app.get("/orders",tokenCheck,index);
    app.post("/orders", tokenCheck,create);
    app.get("/orders/:id",tokenCheck, order_shower);
}

export default OrderRoutes;