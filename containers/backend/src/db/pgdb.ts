import {Pool} from 'pg'

const pool=new Pool({
    user:'postgres',
    host:'0.0.0.0',
    database:'flashcards',
    password:'postgres',
    port:5432
})

export const createPool = () => {
}
