"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const token_1 = require("../token");
const product_1 = require("../handlers/product");
const product_2 = require("../handlers/product");
const product_3 = require("../handlers/product");
const productRoutes = (app) => {
    app.post("/product", token_1.tokenCheck, product_1.create);
    app.get("/product/:id", token_1.tokenCheck, product_2.product_shower);
    app.get("/product", token_1.tokenCheck, product_3.index);
};
exports.productRoutes = productRoutes;
exports.default = exports.productRoutes;
