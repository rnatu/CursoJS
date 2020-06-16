require('dotenv').config();

const express = require('express');
const app = express();

// ! Fazendo a conexão com o banco de dados e emitindo um sinal utilizando app.emit();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        // console.log('Conectei à base de dados')
        app.emit('pronto')
    })
    .catch(e => console.log(e));


const routes = require('./routes');

const path = require('path');

// Atribuição via desestruturação, pois foi exportado somente utilizando exports, assim enviando um objeto
const { middlewareGlobal, outroMiddleware } = require('./src/middlewares/middleware');

// * tratando o req.body
app.use(express.urlencoded({
    extended: true
}))



// * Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(outroMiddleware)

// * utilizando conteudo estaticos
app.use(express.static(path.resolve(__dirname, 'public')));

// * setando o view
//setando o caminho absoluto com o path.resolve
app.set('views', path.resolve(__dirname, 'src', 'views'));
//setando a engine ejs
app.set('view engine', 'ejs');


// * utilizando as routes
app.use(routes);


// ? Quando o app.emit() emitir o sinal, a o código abaixo é realizado via app.on();
app.on('pronto', () => {
    // * Configurando porta/endereço
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('Servidor executando na porta 3000');
    });
});