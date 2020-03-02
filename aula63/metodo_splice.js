//                -5      -4        -3        -2        -1
//                0       1         2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
console.log(nomes);

// * nomes.splice(índice, delete, elemento1, elemento2, elemento3);
// pop -> remove o ultimo elemento e retorna o próprio elemento removido
// shift -> remove o primeiro elemento e retorna o próprio elemento removido
// push -> adiciona um ultimo elemento no array e retorna o próprio elemento adicionado
// splice -> retorna um array, pois pode remover e adicionar varios elementos

// * simulando o pop com o splice
// const removido = nomes.splice(-1, 1);
// console.log(removido);
// console.log(nomes);

// * simulando o shift
// const removido = nomes.splice(0, 1);
// console.log(removido);
// console.log(nomes);

// const removidos = nomes.splice(2, 2);
// const removidos = nomes.splice(-2, 2);
// const removidos = nomes.splice(1, Number.MAX_VALUE);
// console.log(removidos);
// console.log(nomes);

console.log('');
console.log('');

console.log(nomes);
// * simulando o push
// const adicionado = nomes.splice(Number.MAX_VALUE, 0, 'Alexandro');
// console.log(nomes);

// * simulando o unshift
// const adicionado = nomes.splice(0, 0, 'Fernando');
// console.log(nomes);

// const adicionados = nomes.splice(3, 2, 'Luiz', 'Renato'); //removido o indice 3 e 4, e adicionado dois novos elementos do indice informado para frente
// console.log(nomes);