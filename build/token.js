"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenCheck = void 0;
const jwt = require('jsonwebtoken');
const secret_code = process.env.TOKEN_SECRET || '';
function tokenCheck(req, res, next) {
    try {
        const custom_req = req;
        const auth = custom_req.headers.authorization;
        const dec = jwt.verify(auth, secret_code);
        custom_req.dec = dec;
        next();
    }
    catch (error) {
        res.status(401);
        res.json(`invalid token ${error}`);
        return false;
    }
}
exports.tokenCheck = tokenCheck;
