"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_shower = exports.create = exports.index = void 0;
const order_1 = require("../models/order");
const store = new order_1.orderStore();
const index = async (req, res) => {
    try {
        const data = await store.index();
        res.json(data);
    }
    catch (error) {
        res.json(error);
        res.status(400);
    }
};
exports.index = index;
const create = async (req, res) => {
    try {
        const quantity = req.body.quantity;
        const userid = req.body.user_id;
        const status = req.body.status;
        const data = {
            quantity: quantity,
            user_id: userid,
            status: status,
        };
        res.json(await store.create(data));
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
};
exports.create = create;
const order_shower = async (req, res) => {
    try {
        res.json(await store.show(req.params.id));
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
};
exports.order_shower = order_shower;
