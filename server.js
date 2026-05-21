const http = require('http');
 const servidor = http.createServer((req, res) => {
    res.end("Meu Primeiro servidor web com node.js");
 });

servidor.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});






console.log("Servidor iniciado");


