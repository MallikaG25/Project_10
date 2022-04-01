"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productStore = void 0;
// @ts-ignore
//Importing the database connection
const database_1 = __importDefault(require("../database"));
//CRUD operations(create,read,update,delete)
class productStore {
    async index() {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM Product';
            const result = await conn.query(sql);
            conn.release();
            // Returns rows
            return result.rows;
        }
        catch (err) {
            throw new Error(`Error in products main: ${err}`);
        }
    }
    //show
    async show(id) {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = `SELECT * FROM Product WHERE id=${id}`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Error in showing order:: ${err}`);
        }
    }
    //create
    async create(data) {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = `INSERT INTO Product (name, price) VALUES ('${data.name}', '${data.price}')  RETURNING *`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not create product :: ${err}`);
        }
    }
    //delete
    async delete(id) {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = `DELETE FROM Product WHERE id=${id}`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Could not delete product ${err}, product ID is ${id}`);
        }
    }
}
exports.productStore = productStore;
