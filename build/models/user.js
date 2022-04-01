"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersStore = void 0;
const database_1 = __importDefault(require("../database"));
const dotenv_1 = __importDefault(require("dotenv"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// Reference taken from classroom
dotenv_1.default.config();
const pepper = process.env.BCRYPT_PASSWORD;
const saltRounds = process.env.SALT_ROUNDS || '';
class UsersStore {
    async index() {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM Users';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Error: ${err}`);
        }
    }
    async show(id) {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = `SELECT * FROM Users WHERE id=${id}`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`unable to read the user:  ${err}`);
        }
    }
    async create(data) {
        const { first_name, last_name, user_name, password } = data;
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'INSERT INTO Users (first_name,last_name,user_name,password) VALUES($1,$2,$3,$4) RETURNING *';
            const hash = bcrypt_1.default.hashSync(password + pepper, parseInt(saltRounds));
            const result = await conn.query(sql, [
                first_name,
                last_name,
                user_name,
                hash
            ]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`not able to create user : ${err}`);
        }
    }
    async delete(id) {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = `DELETE FROM Users WHERE id=${id}`;
            const result = await conn.query(sql, [id]);
            const product = result.rows[0];
            conn.release();
            return product;
        }
        catch (err) {
            throw new Error(`Error:  ${err}`);
        }
    }
    async authenticate(user_name, password) {
        try {
            // @ts-ignore
            const conn = await database_1.default.connect();
            const sql = `SELECT * FROM Users WHERE user_name='${user_name}'`;
            const result = await conn.query(sql);
            conn.release();
            const length = result.rows.length;
            if (length > 0) {
                const answer = result.rows[0];
                const cheker = bcrypt_1.default.compareSync(password + process.env.BCRYPT_PASSWORD, answer.password);
                if (cheker) {
                    return answer;
                }
            }
            return null;
        }
        catch (err) {
            throw new Error(`Error in authentication:  ${err}`);
        }
    }
}
exports.UsersStore = UsersStore;
