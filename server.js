const express = require('express');

const app = express();

app.listen(3000, function(){
    console.log(`Servidor iniciado na porta 3000`);
});

app.get('/', function(req, resp){
    `<!DOCTYPE html>
        <html lang="pt-br">
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Servidor iniciado</h1>
            </body>
        </html>
    `
})