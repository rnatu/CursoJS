// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos.

//               0   1   2  3  4 ...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor) {
//     return valor > 10;
// }

// * Retorne os números maiores que 10

// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice);
//     return valor > 10;
// });
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);


console.log('');


const pessoas = [
    { nome: 'Luiz', idade: 62},     // 0
    { nome: 'Maria', idade: 23},    // 1
    { nome: 'Eduardo', idade: 55},  // 2
    { nome: 'Leticia', idade: 19},  // 3
    { nome: 'Rpsana', idade: 32},   // 4
    { nome: 'Wallace', idade: 47},  // 5
];

// * Retorne as pessoas que tem o nome com 5 letras ou mais
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length > 5);
console.log(pessoasComNomeGrande);

// * Retorne as pessoas com mais de 50 anos
const pessoasIdade = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasIdade);

// * retorne as pessoas cujo nome termina com a
const nomeTerminaComA = pessoas.filter(obj => obj.nome.endsWith('a'));
console.log(nomeTerminaComA);






