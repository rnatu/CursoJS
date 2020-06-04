const express = require('express');
const app = express();

// * tratando o req.body
app.use(express.urlencoded({
    extended: true
}))

// http://facebook.com/profiles/14635 <- URL params
// http://facebook.com/profiles/88975?campanha=googleads <- Query string
// http://facebook.com/profiles/88975?campanha=googleads&nome_campanha=seila <- Query string + outra query string separados pelo &


app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do usuário: <input type="text" name="nome">
    <button>Enviar Olá Mundo</button>
    `);
});

// * Configurando URL PARAMS
// : <- indica a utilização de parametros 
// ? <- indica que o parametro é opcional, então a url /teste ira funcionar sem necessidade do parametro
app.get('/teste/:idUsuarios?/:segundoParametro?', (req, res) => {
    
    // * req.params <- Partes que vem na rota da URL Ex: /profiles/3
    //console.log(req.params);
    //res.send(req.params);
    
    
    // * req.query <- vem na query string ex: /pproviles/?chave1=valor1&chave2=valor2&chave3=valor3
    // colocando informações direto na Query string do URL -> http://localhost:3000/teste/?nome=Renato&sobrenome=Xavier&idade=30 <- Query string params
    //console.log(req.query);
    res.send(req.query);
    
})

// * metodo post sendo tratado
app.post('/', (req, res) => {
    console.log(req.body);

    // * req.body <- é referente ao corpo do metodo POST utilizado no html
    res.send(`Oque voce me enviou foi: ${req.body.nome}`); //nome veio do name <- input html
})


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
});