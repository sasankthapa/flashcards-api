import app from '../app'
const supertest=require('supertest')

describe('Testing the app and end points',()=>{
  
    test('Verify connection is working',()=>{
      const response = await supertest(app).get('/test')

      expect(response.status).toBe(200)
      expect(response.body.message).toBe('pass!')
    })

    test('Create a user', async()=> {

    })

    test('Update a user')
     
    afterAll(()=>{
    })
})
