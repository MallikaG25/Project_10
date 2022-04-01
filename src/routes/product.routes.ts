import express from 'express';
import { tokenCheck } from '../token';

import {create} from '../handlers/product';
import {product_shower} from '../handlers/product';
import {index} from '../handlers/product';

export const productRoutes = (app:express.Application) => {
    app.post("/product",tokenCheck,create);
    app.get("/product/:id",tokenCheck, product_shower);
    app.get("/product",tokenCheck, index);
}

export default productRoutes;