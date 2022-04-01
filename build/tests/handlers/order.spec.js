"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const order_1 = require("../../models/order");
const server_1 = __importDefault(require("../../server"));
const store = new order_1.orderStore();
const tmp = (0, supertest_1.default)(server_1.default);
describe("check api for orders", () => {
    let token;
    beforeAll(async () => {
        const answer = await tmp.post("/users").set({
            'Content-type': 'application/json',
        }).send({
            user_name: "Mallika_G",
            first_name: "Mallika",
            last_name: "Gunja",
            password: "password225"
        });
        token = answer.body;
    });
    it("check create order", async () => {
        const answer = await tmp.post("/orders").set("Authorization", token)
            .send({
            user_id: 1,
            quantity: 9,
            status: "active"
        });
        expect(answer.status).toBe(200);
    });
    it("check index order", async () => {
        const order_index = await tmp.get("/orders").set("Authorization", token);
        expect(order_index.status).toBe(200);
    });
    it("check show order", async () => {
        const order_show = await tmp.get("/orders/1").set("Authorization", token);
        expect(order_show.body.length).toEqual(1);
        expect(order_show.status).toBe(200);
    });
});
