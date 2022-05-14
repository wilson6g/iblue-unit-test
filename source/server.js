const express = require('express');
const dotenv = require('dotenv');
const basicOperationsInterface = require('./interfaces/operations-interface/basic-operations-interface');

dotenv.config();

const server = express();

server.use(express.json());
server.use(basicOperationsInterface);

server.listen(process.env.NODE_PORT, () => console.log("Server is running on port ", process.env.NODE_PORT));