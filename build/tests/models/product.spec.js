"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../../models/product");
const store = new product_1.productStore();
const test_one = {
    name: "Laptop",
    price: 50000,
    id: 0
};
describe("checking product", () => {
    describe("check declararion", () => {
        it("check create", () => {
            expect(store.create).toBeDefined();
        });
        it("check index", () => {
            expect(store.index).toBeDefined();
        });
        it("check show", () => {
            expect(store.show).toBeDefined();
        });
    });
    let new_one;
    beforeAll(async () => {
        new_one = await store.create(test_one);
    });
    describe("check working", () => {
        it("check create", () => {
            expect(new_one.price).toEqual(50000);
        });
        it("check index", async () => {
            const data = await store.index();
            expect(data[0].name).toEqual("Laptop");
        });
        it("check show", async () => {
            const data = await store.show("1");
            expect(data[0].price).toEqual(50000);
        });
    });
});
