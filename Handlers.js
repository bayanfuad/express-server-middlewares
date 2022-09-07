'use strict';

function handleHome(req, res){
    res.send('Hello World!');
}

function handleSquare(req, res){
    const result={num:req.squared}
    res.json(result);    
}

function handleError(req, res){
    res.send('error 404 - does not exist');
}

module.exports = {handleHome,handleSquare,handleError};