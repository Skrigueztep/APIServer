const express = require('express');
const http = require('http');
const server = express();
const port = process.env.port || 3000;

const bodyParser = require('body-parser');
const helmet = require('helmet');
const api = require('./routes/api');
require('./db/database');

server.use(helmet());
server.disable('x-powered-by');

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.use('/api',api);

server.get('/',(req,res) =>{
    res.send('Server started!...');
});

http.createServer().listen(port,()=>{
    console.log('Running server ...');
});
