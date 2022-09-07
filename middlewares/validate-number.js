'use strict';
const validateNumber =(req,res,next)=>{
    const{num}=req.query;
    const rgx= /\b[0-9]*\b/g;
    const rgxNum = num.match(rgx)[0];          
    console.log(rgxNum);
    
    if(rgxNum){
        let number = parseInt(rgxNum);
        req.squared = number*number;
        next();
    }
    else{
    next('error 500 enter a number');
}
}

 module.exports = {validateNumber};