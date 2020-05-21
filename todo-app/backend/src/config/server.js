const PORT = 3005;
const express = require('express');
const server = express();
const allowCors = require('./cors');

server.use(allowCors);
server.use(express.urlencoded({ extended: true }));
server.use(express.json());


server.listen(PORT, _ => {
  console.log(`BACKEND executando na porta ${PORT}`)
})

module.exports = server