import supertest from "supertest";
import request from "superagent";
import { UsersStore } from "../../models/user";
import app from "../../server";

const store = new UsersStore();
const tmp=supertest(app);

describe("check user handler api", () => {
    let answer:request.Response;
    let token:string;
    beforeAll(async() => {
        answer = await tmp.post("/users").set({
            'Content-type': 'application/json'
        }).send({
            user_name: "Mallika_G",
            first_name: "Mallika",
            last_name: "Gunja",
            password: "password225"
        })
        token = answer.body;
    })

    it("user hanlder create",async() => {
        expect(answer.status).toBe(200)
    })

    it("user handler index",async() => {
        const answer = await tmp.get("/users").set("Authorization",token);
        expect(answer.status).toBe(200)
    })

    it("user handler show",async() => {
        const answer = await tmp.get("/users/1").set("Authorization",token);
        expect(answer.status).toBe(200)
    })

    it("check user handler authenticator", async() => {
        const answer = await tmp.post("/users/authenticate").set({
            'Content-type': 'application/json',
            "Authorization": token
        }).send({
            user_name:"Mallika_G",
            password:"password225"
        })
        expect(answer.status).toBe(200);
    })
    
})