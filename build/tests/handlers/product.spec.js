"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const product_1 = require("../../models/product");
const server_1 = __importDefault(require("../../server"));
const store = new product_1.productStore();
const tmp = (0, supertest_1.default)(server_1.default);
describe("check api for product", () => {
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
    it("check create product api", async () => {
        const answer = await tmp.post("/product").set("Authorization", token).send({
            name: "Laptop",
            price: 50000
        });
        expect(answer.status).toBe(200);
    });
    it("check product index", async () => {
        const answer = await tmp.get("/product");
        expect(answer.status).toBe(200);
    });
    it("check show api", async () => {
        const answer = await tmp.get("/product/1");
        expect(answer.status).toBe(200);
    });
});
