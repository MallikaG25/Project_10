// @ts-ignore
//Importing the database connection
import client from "../database";



//THE BELOW CODE WAS TAKEN FROM CLASSROOM----
//LINK:  https://classroom.udacity.com/nanodegrees/nd0011-ent-phenom/parts/cd0293/modules/51def693-c3a5-4453-9b04-62baa1a74b3b/lessons/5b5d6087-478d-48fb-aa9f-9fc87e743d51/concepts/3cf5365a-6472-4244-af1b-39118c1238d1

export type product={
    id: number,
    name: string,
    price: number
}

export type createProduct={
    id:number,
    name: string;
    price: number
}

//CRUD operations(create,read,update,delete)
export class productStore{
    async index(): Promise<product[]> {
        try{  
            // @ts-ignore
            const conn = await client.connect(); 
            const sql = 'SELECT * FROM Product' 
            const result = await conn.query(sql);
            conn.release(); 
            // Returns rows
            return result.rows; 
        }
        catch(err){
            throw new Error(`Error in products main: ${err}`);
        }
    }
    //show
    async show(id:string):Promise<product[]>{
        try{
            // @ts-ignore
            const conn = await client.connect();
            const sql = `SELECT * FROM Product WHERE id=${id}`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch(err){
            throw new Error(`Error in showing order:: ${err}`);
        }
    }
    //create
    async create(data:createProduct):Promise<product>{
        try{
            // @ts-ignore
            const conn = await client.connect();
            const sql = `INSERT INTO Product (name, price) VALUES ('${data.name}', '${data.price}')  RETURNING *`
            const result = await conn.query(sql);
            conn.release();
            return result.rows[0];
        }
        catch(err){
            throw new Error(`Could not create product :: ${err}`);
        }
    }

    //delete
    async delete(id:string):Promise<product[]>{
        try{
            // @ts-ignore
            const conn = await client.connect(); 
            const sql = `DELETE FROM Product WHERE id=${id}`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch(err){
            throw new Error(`Could not delete product ${err}, product ID is ${id}`);
        }
    }
}