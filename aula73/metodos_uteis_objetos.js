/*
Object.values (retorn os valores)
Object.keys (retorn as chaves)
Object.entries (retorn as chaves e os valores)

Object.assign(des, any)
... (spread)

Object. getOwnPropertyDesciptor(o, 'prop')

Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {nome: 'Caneca', preco: '1.8', material: 'Plastico'}

// * Mostrar as chaves do objeto
console.log(Object.keys(produto));
console.log();
// * Mostrar os valores do objeto
console.log(Object.values(produto));
console.log();
// * Mostrar valores e chaves
console.log(Object.entries(produto));
console.log();



// * Copiar um objeto
// // Copiar utilizando Object.assign
// const outracoisa = Object.assign({}, produto, { 
//     material: 'Vidro'
// });

// Copiar utilizando spread
const outraCoisa = {
    ...produto,
    material: 'Porcelana',
};

// copiar só as propriedades especificas
const outraCoisaEspecifica = {nome: produto.nome, preco: produto.preco};

outraCoisa.nome = 'Prato';
outraCoisa.preco = '5.0';

console.log(produto, outraCoisa, outraCoisaEspecifica);
console.log('');


// * Congelar o objeto
// Object.freeze(produto);
// //não ira funcionar alterar, deletar...
// produto.nome = 'Outro nome';
// console.log(produto);

// exibe as propriedade do objeto
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

Object.defineProperty(produto, 'nome', {
    writable: false,
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));