import { Pool, PoolClient} from 'pg'

const pool=new Pool({
    user:'flashcarduser',
    host:'db',
    database:'flashcards',
    password:'postgres',
    port:5432
})

export const validateConn = () => {
    return pool.connect()
}

export const connectPool= async() :Promise<PoolClient|null>=> {
    try{
        const client=await pool.connect();
        return client;
    }catch(err){
        console.log(err)
        return null;
    }
}
