'use strict';

const {validateNumber} = require('../middlewares/validate-number');

describe('Testing validateNumber Middleware',()=>{

    let spy ;
    let res = {};
    let req = {query:{num:'5'}};
    let next = jest.fn();
    
    beforeEach(()=>{
        spy = jest.spyOn(console,'log').mockImplementation();
    });

    afterEach(()=>{
        spy.mockRestore();
    })

    it('Test validateNumber console.log',()=>{

        validateNumber(req,res,next);
        expect(spy).toHaveBeenCalled();
    });

    it('Test validateNumber next',()=>{

        validateNumber (req,res,next);
        expect(next).toHaveBeenCalled();
    });


})