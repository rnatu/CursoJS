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


const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');

const routes = require('./routes');

const path = require('path');



// * tratando o req.body
app.use(express.urlencoded({
    extended: true
}))




// * utilizando conteudo estaticos
app.use(express.static(path.resolve(__dirname, 'public')));

// * configurando as sessões
const sessionOptions = session({
    secret: 'ashdsuiahusi839324 342 asd w ere 3432()',
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());


// * setando o view
//setando o caminho absoluto com o path.resolve
app.set('views', path.resolve(__dirname, 'src', 'views'));
//setando a engine ejs
app.set('view engine', 'ejs');

// * middleware
// Atribuição via desestruturação, pois foi exportado somente utilizando exports, assim enviando um objeto
const { middlewareGlobal } = require('./src/middlewares/middleware');
app.use(middlewareGlobal);
// app.use(outroMiddleware)

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