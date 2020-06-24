// # Referente a variaveis de ambiente que estão configuradas no arquivo .env
require('dotenv').config();

// # Inciando o express
const express = require('express');
const app = express();

// # mongoose, é quem vai modelar a base de dados utilizando um schema
const mongoose = require('mongoose');
// # Fazendo a conexão com o banco de dados e emitindo um sinal utilizando app.emit();
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        // console.log('Conectei à base de dados')
        app.emit('pronto')
    })
    .catch(e => console.log(e));

// # A session identifica o ID do cookie salvo no navegador do cliente
const session = require('express-session');

// #  Configura para que os dados das sessões (session) sejam salvas dentro do banco de dados (mongoDB)
const MongoStore = require('connect-mongo')(session);

// # São as mensagens "auto-destrutivas", que são exibidas e depois somem. Muito utilizandas para enviar mensagens de erro ou feedback para o usuario
// # Elas são salvas em sessão, por isso necessita da session para funcionar
const flash = require('connect-flash');

// # São as rotas da nossa aplicação, ou seja: /home('/'), /contato, /sobre...
const routes = require('./routes');

// # Utilizado para trabalhar com caminhos
const path = require('path');

// # é uma recomendação do próprio express para segurança
const helmet = require('helmet');
// # csurf (csrfToken) - Utilizado para segurança de formulário, impedindo a terceiros de postar na nossa aplicação
const csrf = require('csurf');

// # Os middlewares são funções que são executadas na rota, quando voce quer fazer alguma ação antes de responder o cliente ou depois. 
// # Ex: verificar se o usuário está logando antes de acessar determinada página
// # Uma função passa para outra função, que passa para outra... Utilizando o next()
// Atribuição via desestruturação, pois foi exportado somente utilizando exports, assim enviando um objeto
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

// ? utilizando o helmet
app.use(helmet());


// # Permite postar formulários para dentro da aplicação
app.use(express.urlencoded({ extended: true }));
// # Permite fazer o parse de json para dentro da aplicação
app.use(express.json());

// # Configurando a utilização de todos os arquicos estáticos na aplicação, que podem ser acessados diretamente Ex: Imagens, css, bundle.js...
app.use(express.static(path.resolve(__dirname, 'public')));


// ? configurando a session
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
// ? utilizando a session configurada
app.use(sessionOptions);
// ? utilizando flash messages
app.use(flash());


// # setando o views que são arquivos que são renderizados na tela, geralmente arquicos html
// ? setando o caminho absoluto com o path.resolve
app.set('views', path.resolve(__dirname, 'src', 'views'));
// # setando a engine para renderizar o html, no caso ejs
app.set('view engine', 'ejs');

// ? utilizando o csrf
app.use(csrf());

// ? utilizando os middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);


//? utilizando as routes
app.use(routes);


// # iniciando o servidor configurando para que ele "ouça" a porta 3000
// ? Quando o app.emit() emitir o sinal, a o código abaixo é realizado via app.on();
app.on('pronto', () => {
    // * Configurando porta/endereço
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('Servidor executando na porta 3000');
    });
});