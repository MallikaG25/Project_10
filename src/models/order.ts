//Importing the database connection
import client from "../database";


//THE BELOW CODE WAS TAKEN FROM CLASSROOM----
//LINK:  https://classroom.udacity.com/nanodegrees/nd0011-ent-phenom/parts/cd0293/modules/51def693-c3a5-4453-9b04-62baa1a74b3b/lessons/5b5d6087-478d-48fb-aa9f-9fc87e743d51/concepts/3cf5365a-6472-4244-af1b-39118c1238d1
export type order={
    id: number;
    quantity: number;
    user_id: number;
    status: string;
}

export type createOrder={
    quantity: number;
    user_id: number;
    status: string;
}

//Running the sql on database 
export class orderStore{
    async index():Promise<order[]>{
        try{
            //Opening db_connection
            const conn = await client.connect();
            const sql = 'SELECT * FROM Orders'
            const result = await conn.query(sql);
            // Closing db_connection
            conn.release();
            return result.rows;
        }
        catch(err){
            throw new Error(`Error: ${err}`);
        }
    }
    // show model
    async show(id:string):Promise<order[]>{
        try{
            const conn = await client.connect();
            const sql = `SELECT * FROM Orders WHERE id=${id}`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch(err){
            throw new Error(`Error: ${err}`);
        }
    }
    //creating model
    async create(data:createOrder):Promise<order>{        
        try{
            const conn=await client.connect();
            const sql = `INSERT INTO Orders (quantity, user_id, status) VALUES (${data.quantity}, ${data.user_id}, '${data.status}') RETURNING *;`
            const result = await conn.query(sql);
            conn.release();
            return result.rows[0];
        }
        catch(err){
            throw new Error(`Error: ${err}`);
        }
    }

    //deleting model
    async delete(id:string):Promise<order>{
    try{
        const conn = await client.connect();
        const sql = `DELETE FROM Orders WHERE id=${id} RETURNING *`;
        const result = await conn.query(sql);
        conn.release();
        return result.rows[0];
    }
    catch(err){
        throw new Error(`Got Error : ${err}`);
        }
    }
}