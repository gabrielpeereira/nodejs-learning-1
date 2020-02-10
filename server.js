const http = require('http');

const servidor = http.createServer(function(req, resp){
    resp.end(`<h1>Servidor iniciado</h1>`);
});

servidor.listen(3000);