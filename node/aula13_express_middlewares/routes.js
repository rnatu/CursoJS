const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController')

function meuMiddleware(req, res, next) {
    req.session = { nome: 'Renato', sobrenome: 'Xavier'};
    console.log();
    console.log('Passei no seu middleware');
    console.log();

    next();
}

//rotas da home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

//rotas de contato
route.get('/contato', contatoController.paginaDoContato);


module.exports = route;