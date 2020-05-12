// * import { nome as nome2, segundoNome, idade, soma } from './modulo1';
// const nome = 'João';

// console.log(nome, nome2, segundoNome, idade);
// console.log(soma(5,5));


// * import { nome as nome2, Pessoa as outraCoisa, soma } from "./modulo1";
// const nome = 'João';
// const p1 = new outraCoisa('Renato', 'Xavier');

// console.log(nome, nome2);
// console.log(p1);
// console.log(soma(5,5));

// * import * as meuModulo from './modulo1';
//console.log(meuModulo)


// * import qualquerNome from './modulo1'
// console.log(qualquerNome(5,5));

// * import nomePadrao from './modulo1';
// console.log(nomePadrao);

// * sempre que for importado sem as chaves {}, sera importado o default
// import arrowFunction, {nome as nome2, sobreNome} from './modulo1';
// console.log(nome2, sobreNome);
// console.log(arrowFunction(2,10));

import Pessoa, {nome, sobreNome} from './modulo1';

const p1 = new Pessoa(nome, sobreNome);

console.log(p1);