const http   =  require('http');
const app    =  require('./app');
const port   =  process.env.PORT || 4343;
const server =  http.createServer(app);

server.listen(port);
console.log('Servidor Executando na Porta ´4343´');
// INSTALAÇÃO DO NOODEMOON - npm install --save-dev nodemon