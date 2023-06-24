const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');
const router = require('./Routers');
const port = 3000

const server = express();
server.use(cors());
server.use(express.json());
server.use(bodyParse.urlencoded({extended: false}));
server.use(router); 
server.listen(port , () => console.log('Conexão realizada com sucesso!'));