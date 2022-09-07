'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
const {handleHome, handleSquare, handleError} = require('./Handlers');
const {validateNumber} = require('./middlewares/validate-number')
const {errorHandler}= require('./error-handlers/500')
// built-in express middlewares / appllication level
app.use(express.json());
app.use(cors());




// router middlewares
app.get('/',handleHome);
app.get('/square',validateNumber,handleSquare);

// server port
function start(port){
app.listen(port,() =>{
console.log(`server is working on port ${port}`)
})};

// error handlers

app.use(errorHandler);
app.get('*',handleError);

module.exports={app,start}