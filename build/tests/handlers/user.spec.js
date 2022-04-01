"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const user_1 = require("../../models/user");
const server_1 = __importDefault(require("../../server"));
const store = new user_1.UsersStore();
const tmp = (0, supertest_1.default)(server_1.default);
describe("check user handler api", () => {
    let answer;
    let token;
    beforeAll(async () => {
        answer = await tmp.post("/users").set({
            'Content-type': 'application/json'
        }).send({
            user_name: "Mallika_G",
            first_name: "Mallika",
            last_name: "Gunja",
            password: "password225"
        });
        token = answer.body;
    });
    it("user hanlder create", async () => {
        expect(answer.status).toBe(200);
    });
    it("user handler index", async () => {
        const answer = await tmp.get("/users").set("Authorization", token);
        expect(answer.status).toBe(200);
    });
    it("user handler show", async () => {
        const answer = await tmp.get("/users/1").set("Authorization", token);
        expect(answer.status).toBe(200);
    });
    it("check user handler authenticator", async () => {
        const answer = await tmp.post("/users/authenticate").set({
            'Content-type': 'application/json',
            "Authorization": token
        }).send({
            user_name: "Mallika_G",
            password: "password225"
        });
        expect(answer.status).toBe(200);
    });
});
