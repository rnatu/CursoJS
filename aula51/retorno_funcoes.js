//return
// Retorna um valor
// Termina a função

function soma(a, b) {
    return a + b;
}

let s1 = soma(2, 5);
console.log(s1);
console.log('');



///////////////////////////////////////////
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome
    }
}

const p1 = criaPessoa('Luiz', 'Otavio');
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
};

console.log(p1, p2);
console.log(typeof p1, typeof p2);


/////////////////////////////////////////////////
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá'); //aqui está armazenando o retorno, que é a função falaResto (linha 38)
const resto = fala('Mundo!.'); //aqui executa a função que foi armazenada na const fala, com os parametros, executando a função falaResto (linha 35)

console.log(resto);


function criaMultiplicador(multiplicador) {
    //multiplicador
    function multiplicacao(n){
        return n * multiplicador
    }
    return multiplicacao;
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(4));
console.log(triplica(4));
console.log(quadriplica(4));
