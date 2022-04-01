"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../token");
const user_1 = require("../handlers/user");
const userRouter = (app) => {
    app.post("/users", token_1.tokenCheck, user_1.create);
    app.get("/users", token_1.tokenCheck, user_1.index);
    app.get("/users/:id", token_1.tokenCheck, user_1.user_shower);
    app.post("/users/authenticate", token_1.tokenCheck, user_1.authenticator);
};
exports.default = userRouter;
