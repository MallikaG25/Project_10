import supertest from "supertest";
import { productStore } from "../../models/product";
import app from "../../server";

const store=new productStore();
const tmp=supertest(app);

describe("check api for product",()=>{
    let token:string;
    beforeAll(async()=>{
        const answer=await tmp.post("/users").set({
            'Content-type': 'application/json',
        }).send({
            user_name: "Mallika_G",
            first_name: "Mallika",
            last_name: "Gunja",
            password: "password225"
        })
        token = answer.body;
    })
    it("check create product api",async () => {
        const answer = await tmp.post("/product").set("Authorization",token).send({
            name: "Laptop",
            price: 50000
        })
        expect(answer.status).toBe(200)
    })

    it("check product index",async() => {
        const answer = await tmp.get("/product")
        expect(answer.status).toBe(200)
    })

    it("check show api",async() => {
        const answer = await tmp.get("/product/1")
        expect(answer.status).toBe(200)
    })
})
