exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do usuário: <input type="text" name="nome">
    <button>Enviar Olá Mundo</button>
    `);
};

exports.trataPost = (req, res) => {
   res.send('Ei, sou sua nova rota de POST');
}
