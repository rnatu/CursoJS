// let a = 'A';
// let b = 'B';
// let c = 'C';

// const letras = [b, c, a];
// [a, b, c] = letras; 

// console.log(a, b, c);

// array é indexado
//                0     1     2     3     4     5      6    7      8   <- Indices
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]; // <- valores
const [um, , tres, , cinco, , sete, ...resto] = numeros; //as variaveis criadas primeiroNumero e segundoNumero vão ser const pois foram declaradas assim no começo da frase.
//... rest, ...spread
console.log(um, tres, cinco);

console.log(resto);

//                     0          1          2         indices
//                  0  1  2    0  1  2    0  1  2      indices
const numeros2 = [ [1, 2, 3], [4, 5, 6], [7, 8 ,9] ]

console.log(numeros2[1][2]);

//const [, [, , seis]] = numeros2;
//console.log(seis);


const [lista1, lista2, lista3] = numeros2;
console.log(lista2[2]);


