import { createOrder, order, orderStore } from "../../models/order";
const store = new orderStore();
const test_1:createOrder={
    quantity: 9,
    user_id: 1,
    status: "active",
}

describe("Testing order table ",()=>{
    let new_one:order;
    beforeAll(async()=>{
        new_one = await store.create(test_1)
    })
    
    describe("check declararion", () => {
        it("check create", () => {
            expect(store.create).toBeDefined();
        })
        it("check index", () => {
            expect(store.index).toBeDefined();
        })
        it("check show", () => {
            expect(store.show).toBeDefined();
        })
    })

    describe("check working", () => {
        it("check create", async() => {
              
            const data={
                quantity:new_one.quantity,
                user_id:new_one.user_id,
                status:new_one.status,
            }
            expect(data.status).toEqual(test_1.status);
        })
        it("check index", async() => {
            const tmp = await store.index();
            const test_1:createOrder = {
                quantity: 9,
                user_id: 1,
                status: "active",
            }
            expect(tmp[0].quantity).toEqual(test_1.quantity)
        })
        it("check show", async() => {
            const tmp = await store.show("1");
            if(tmp){
                expect(tmp[0].user_id).toEqual(test_1.user_id);
            }
        })
    })
})