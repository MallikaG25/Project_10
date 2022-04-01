import client from "../database";
import dotenv from "dotenv";
import bcrypt from "bcrypt";


// Reference taken from classroom
dotenv.config()

const pepper=process.env.BCRYPT_PASSWORD
const saltRounds=process.env.SALT_ROUNDS || '';
export type User={
    first_name: string;
    last_name: string;
    user_name: string;
    password: string;
}

export type newUser={
    id: number;
    first_name: string;
    last_name: string;
    user_name: string;
    password: string;
}


export type showUser={
    id: number;
    first_name: string;
    last_name: string;
    user_name: string;
}

export class UsersStore{
    async index():Promise<showUser[]>{
        try{
            // @ts-ignore
            const conn = await client.connect();
            const sql = 'SELECT * FROM Users'
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch(err){
            throw new Error(`Error: ${err}`);
        }
    }

    async show(id:string):Promise<showUser>{
        try{
            // @ts-ignore
            const conn = await client.connect();
            const sql = `SELECT * FROM Users WHERE id=${id}`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows[0];
        }catch(err){
            throw new Error(`unable to read the user:  ${err}`);
        }
    }

    async create(data:User):Promise<newUser>{
        const { first_name, last_name, user_name, password } = data;
        try{
            // @ts-ignore
            const conn = await client.connect();
            const sql = 'INSERT INTO Users (first_name,last_name,user_name,password) VALUES($1,$2,$3,$4) RETURNING *';
            const hash = bcrypt.hashSync(
                password+pepper,parseInt(saltRounds)
            )
            const result = await conn.query(sql,[
                first_name,
                last_name,
                user_name,
                hash
            ]);
            conn.release();
            return result.rows[0];
        }
        catch(err){
            throw new Error(`not able to create user : ${err}`);
        }
    }

    async delete(id:string):Promise<boolean>{
        try{
            // @ts-ignore
            const conn = await client.connect();
            const sql = `DELETE FROM Users WHERE id=${id}`;
            const result = await conn.query(sql, [id])
            const product = result.rows[0]
            conn.release();
            return product;
        }
        catch(err){
            throw new Error(`Error:  ${err}`);
        }
    }

    async authenticate(user_name:string, password:string):Promise<User|null>{
        try{         
            // @ts-ignore
            const conn = await client.connect();
            const sql = `SELECT * FROM Users WHERE user_name='${user_name}'`;
            const result = await conn.query(sql);
            
            conn.release();
            const length = result.rows.length;
            if(length>0){
                const answer = result.rows[0]
                
                const cheker = bcrypt.compareSync(password+process.env.BCRYPT_PASSWORD,answer.password)
                if(cheker)
                {
                    return answer;
                }
            }
            return null;
        }
        catch(err){
            throw new Error(`Error in authentication:  ${err}`)
        }
    }
}