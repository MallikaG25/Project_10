"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticator = exports.user_shower = exports.index = exports.create = void 0;
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret_code = process.env.TOKEN_SECRET || '';
const store = new user_1.UsersStore();
const create = async (req, res) => {
    try {
        let info = req.body;
        const user = {
            first_name: info.first_name,
            last_name: info.last_name,
            user_name: info.user_name,
            password: info.password
        };
        let user_data = await store.create(user);
        const expass = user_data.password;
        const token = jsonwebtoken_1.default.sign({ expass }, secret_code);
        // Returning token
        res.json(token);
    }
    catch (err) {
        res.json(err);
        res.status(400);
    }
};
exports.create = create;
const index = async (req, res) => {
    try {
        res.json(await store.index());
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
exports.index = index;
const user_shower = async (req, res) => {
    try {
        console.log("id in handler user ", req.params.id);
        res.json(await store.show(req.params.id));
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
exports.user_shower = user_shower;
const authenticator = async (req, res) => {
    try {
        const token_info = req.body;
        const scan = await store.authenticate(token_info.user_name, token_info.password);
        if (scan == null) {
            res.status(400);
            res.send("invalid credentials");
        }
        else {
            const new_data = jsonwebtoken_1.default.sign({ scan }, secret_code);
            res.json(new_data);
        }
    }
    catch (err) {
        res.json(err);
        res.status(400);
    }
};
exports.authenticator = authenticator;
