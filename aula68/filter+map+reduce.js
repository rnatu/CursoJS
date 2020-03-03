//               0   1   2  3  4 ...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


// -> Filtrar pares
// -> Dobrar os valores
// -> Retorne a soma do dobro de todos os pares
/// -> Reduzir (somar tudo)
const numerosPares = numeros.filter(valor => valor % 2 === 0 ).map(valor => valor * 2).reduce((acumulador, valor) => acumulador + valor);
console.log(numerosPares);


// // -> Filtrar pares
// const numerosPares = numeros.filter(valor => valor % 2 === 0);
// console.log(numerosPares);

// // -> Dobrar os valores
// const dobro = numerosPares.map(valor => valor * 2);
// console.log(dobro);

// // -> Retorne a soma do dobro de todos os pares
// /// -> Reduzir (somar tudo)
// const somaDobro = dobro.reduce((acumulador, valor) => acumulador + valor);
// console.log(somaDobro);


