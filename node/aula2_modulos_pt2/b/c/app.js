// * importando uma função
// const multiplicacao = require('./mod');
// multiplicacao(2, 20);

// * importanto um numero
// n = require('./mod');
// console.log(n)

// * importando uma classe de pastas seguintes ('./pasta1/pasta2/pasta3/arquivo.css)
const Cachorro/*pode ser importado com qualquer nome*/ = require('./d/mod');
const c1 = new Cachorro('totó');
c1.latir();

// * importando uma classe de pastas anteriores ('../../../arquivo.js')
const Gato = require('../mod2');
const g1 = new Gato('Nina');
g1.miar();

console.log('');

// * exibe a localização do arquivo desde a raiz
console.log(__filename);
// * exibe a localização da pasta desde a raiz
console.log(__dirname);

