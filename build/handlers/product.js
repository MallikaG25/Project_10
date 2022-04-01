"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = exports.product_shower = exports.create = void 0;
const product_1 = require("../models/product");
const store = new product_1.productStore();
const create = async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            price: req.body.price,
            id: req.body.id,
        };
        res.json(await store.create(data));
    }
    catch (err) {
        res.json(err);
        res.status(400);
    }
};
exports.create = create;
const product_shower = async (req, res) => {
    try {
        const tmp = req.params.id;
        res.json(await store.show(tmp));
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
exports.product_shower = product_shower;
const index = async (req, res) => {
    try {
        res.json(store.index());
    }
    catch (err) {
        res.json(err);
        res.status(400);
    }
};
exports.index = index;
