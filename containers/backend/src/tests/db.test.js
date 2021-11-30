import { assert } from 'console';
import {connectToDB, disconnectDB} from '../db/db'
import User from '../models/user';
import { connectPool, validateConn } from '../db/pgdb'

describe('Testing Mongo Database connection',()=>{
    beforeAll(()=>{
        // Initialize the database 
        return connectToDB();
    })

    afterAll(()=>{
        // Initialize the database 
        return disconnectDB();
    })

    test('User Creation',()=>{
        const user={
            username:'test user',
            password:'password',
            email:'thapas@beloit.edu'
        }
        const UserObject=new User(user);
        try{
            UserObject.save();
        }catch(e){
        }
    })

    test('User login',()=>{
    })

    test('User Register',()=>{
    })

    test('Adding a new character',()=>{

    })

    test('Modify user settings',()=>{
    })

    test('Character without any parent',()=>{
    })
})

describe('Testing pg database connection',()=>{
    test('Validate Connection and release',async()=>{
        const client=await connectPool();
        expect(client).not.toBeNull()
        client.release()
    })


    test('Adding a character',()=>{
        const character={
            meaning:'You',
            pinyin:'ni3',
            character:'你'
        }
    })

})
