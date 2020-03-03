
// utiliza os parametros acumulador, valor, indice, array -> sendo indice e array opcionais

//               0   1   2  3  4 ...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
console.log(numeros);
console.log('');

// * Faça a soma de todos os numeros (reduce)
const total = numeros.reduce((acumulador, valor, indice, array) => {
 acumulador += valor;
 return acumulador;
}, 0); //valor inicial do acumulador (opcional)
console.log(total);


// * Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62},     // 0
    { nome: 'Maria', idade: 23},    // 1
    { nome: 'Eduardo', idade: 55},  // 2
    { nome: 'Leticia', idade: 19},  // 3
    { nome: 'Rosana', idade: 64},   // 4
    { nome: 'Wallace', idade: 47},  // 5
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
   if (acumulador.idade > valor.idade) return acumulador;
   return valor;
});

console.log(maisVelha);














