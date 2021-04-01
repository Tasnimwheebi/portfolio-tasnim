'use strict';
// const { response, request } = require('express');
let express = require('express');

let server = express();
let PORT = process.env.PORT || 3030 ;

server.use(express.static('/.public'));

server.get('/', (req,res)=>{
    res.send('home route')
})

server.get('/test',(request,response)=>{
    response.send('Test My live server');
})

server.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}`);
})