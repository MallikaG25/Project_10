"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
const store = new user_1.UsersStore();
const test_one = {
    user_name: "Mallika_G",
    first_name: "Mallika",
    last_name: "Gunja",
    password: "password225"
};
let info;
beforeAll(async () => {
    info = await store.create(test_one);
});
const tester = {
    id: 1,
    first_name: "Mallika",
    last_name: "Guja",
    user_name: "Mallika_G",
};
describe("user table", () => {
    describe("check declararion", () => {
        it("check create", () => {
            expect(store.create).toBeDefined();
        });
        it("check show", () => {
            expect(store.show).toBeDefined();
        });
        it("check index", () => {
            expect(store.index).toBeDefined();
        });
        it("check authenticate", () => {
            expect(store.authenticate).toBeDefined();
        });
    });
    describe("user table", () => {
        it("create user", async () => {
            const { id, first_name, last_name, user_name } = info;
            const answer = { id, first_name, last_name, user_name };
            expect(answer.first_name).toEqual(tester.first_name);
        });
        it("user show", async () => {
            const info = await store.show("1");
            expect(info.first_name).toEqual("Mallika");
        });
        it("user index", async () => {
            const info = await store.index();
            expect(info[0].last_name).toEqual("Gunja");
        });
        it("user authenticate", async () => {
            const info = await store.authenticate(test_one.user_name, test_one.password);
        });
    });
});
