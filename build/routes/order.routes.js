"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../token");
const order_1 = require("../handlers/order");
const order_2 = require("../handlers/order");
const order_3 = require("../handlers/order");
const OrderRoutes = (app) => {
    app.get("/orders", token_1.tokenCheck, order_1.index);
    app.post("/orders", token_1.tokenCheck, order_2.create);
    app.get("/orders/:id", token_1.tokenCheck, order_3.order_shower);
};
exports.default = OrderRoutes;
