function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('CAI NO ERRO');
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise'); //then
            return;
        }, tempo);
    });

}

const promises = [
    //'Primeiro valor',
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', 3000),
    esperaAi(5, 1000),
    //'Outro valor'
];


// * Promise.all - Retorna todos valores resolvidos da promise em ordem - ou retorna o erro somente
// * Promise.race - retorna o primeiro valor a ser resolvido na promise - ou retorna o erro somente
Promise.race(promises)
.then(function(valor) {
    console.log(valor);
}).catch(function(erro) {
    console.log(erro);
});


// * Promise.resolve
// * Promise.reject
function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.reject('Página em cache');        
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));

