module.exports = (app) => {
    app.get('/', function(req, resp){
        resp.send(
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
        ) 
     });

     app.get('/livros', function(req, resp){
        resp.marko(
            require('../views/livros/lista/lista.marko');
        ) 
     });
};

