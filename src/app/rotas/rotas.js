const LivroDao = require('../infra/livro-dao');

const db = require('../../config/database');

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

        listaLivros(function(erro, resultados){
            resp.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros: resultados
                }
            ) 
         })

        //  db.all('SELECT * FROM livros', function(erro, resultados){
        //     resp.marko(
        //         require('../views/livros/lista/lista.marko'),
        //         {
        //             livros: resultados
        //         }
        //     ) 
        //  });

     });
};

