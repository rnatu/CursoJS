const express = require('express');
const app = express();

const routes = require('./routes');

const path = require('path');

// * tratando o req.body
app.use(express.urlencoded({
    extended: true
}))


// * setando o view
//setando o caminho absoluto com o path.resolve
app.set('views', path.resolve(__dirname, 'src', 'views'));
//setando a engine ejs
app.set('view engine', 'ejs');


// * utilizando as routes
app.use(routes);




app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
});