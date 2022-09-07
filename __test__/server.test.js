'use strict';

const {app} = require('../server');

const supertest = require('supertest');

const request = supertest(app); 

describe ('testing API server',()=>{
    it('testing home route',async()=>{
        const response = await request.get('/');
        expect(response.text).toEqual('Hello World!');
        
    })
    it('testing square route', async()=>{
        const response = await request.get('/square');
        expect(typeof response.body).toEqual('object');
    })
})