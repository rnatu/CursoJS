// IIFE -> Immediately invoked function expression
(function (idade, peso, altura) {

    //codigo aqui...
    const sobrenome = 'Xavier';

    function criaNome(nome) {
        return nome + ' ' + sobrenome + ' idade ' + idade;
    }

    function falanome() {
        console.log(criaNome('Renato'));
    }

    falanome();
    console.log(peso, altura);

})(`${29}`, `Peso ${80}`, ` Altura ${1.90}`);



const nome = 'Qualquer coisa';
console.log(nome);