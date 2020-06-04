const express = require('express');
const app = express();

// * Operações Básicas
//       criar   ler   atualizar    apagar
//CRUD - CREATE, READ, UPDATE,      DELETE
//       POST    GET   PUT          DELETE


// Rotas da aplicação
// http://meusite.com/ <- GET -> Entregue a página /  <- raiz do site
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do usuário: <input type="text" name="nome">
    <button>Enviar Olá Mundo</button>
    `);
});
app.post('/', (req, res) => {
    res.send('Recebi o formulário');
})


app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente');
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
});