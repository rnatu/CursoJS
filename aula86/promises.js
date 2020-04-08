function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(() => {
            resolve(msg); //then
        }, tempo);
    });


}

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da BASE', rand(1, 3));    
    })
    .then(resposta => {
        // return resposta + 'vai para o outro THEN';
        console.log(resposta);
        return esperaAi(22222, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('Eu Exibe dados na tela');
    })
    .catch((err) => {
        console.log('Erro', err);
    });

console.log('Isso aqui sera exibido antes de qualquer promise.')
