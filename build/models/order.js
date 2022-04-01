"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderStore = void 0;
//Importing the database connection
const database_1 = __importDefault(require("../database"));
//Running the sql on database 
class orderStore {
    async index() {
        try {
            //Opening db_connection
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM Orders';
            const result = await conn.query(sql);
            // Closing db_connection
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Error: ${err}`);
        }
    }
    // show model
    async show(id) {
        try {
            const conn = await database_1.default.connect();
            const sql = `SELECT * FROM Orders WHERE id=${id}`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Error: ${err}`);
        }
    }
    //creating model
    async create(data) {
        try {
            const conn = await database_1.default.connect();
            const sql = `INSERT INTO Orders (quantity, user_id, status) VALUES (${data.quantity}, ${data.user_id}, '${data.status}') RETURNING *;`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Error: ${err}`);
        }
    }
    //deleting model
    async delete(id) {
        try {
            const conn = await database_1.default.connect();
            const sql = `DELETE FROM Orders WHERE id=${id} RETURNING *`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Got Error : ${err}`);
        }
    }
}
exports.orderStore = orderStore;
