// Valor por referência 
//                 0         1         2        3          4               
const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
// * Copiando a referencia na memória
const novo = nomes; //valor passado por referencia NÃO É UMA CÓPIA, é um VINCULO do mesmo endereço de memória;
// * Copiando os valores utilizando operador spread
const novoC = [...nomes]; //É feita uma CÓPIA utilizando o operador spread ...
//nomes.push('Fabio', 'Renato', 'Felipe');
// console.log(nomes);
// console.log(novo);
// console.log(novoC); 

// * Exibindo quantos valores existem no array
//console.log(nomes.length); //quantos valores existem no array


// * Modo que pode ser utilizado tambem para declarar um array
//const nomes = new Array('Eduardo', 'Maria', 'Joana');
// string, objetos, funções, numeros, booleans


// * Fatiando usando slice e armazenando em uma variavel
//const nomeFatiado = nomes.slice(1,3); //o indice 3 não é incluido, ex: pega do indice 1 até o 2;
// const nomeFatiado = nomes.slice(0,-2); //(primeiro indice, -2 ultimos indices)
// console.log(nomeFatiado);


// * Convertendo strings em arrays utilizando split
// const nomeString = 'Luiz Otávio Miranda';
// const nomeString2 = 'Fernando, Ferreira, Santos, Silva';
// const nomeArray = nomeString.split(' '); //Transforma uma string em array dividindo por um caracter especifico. no caso foi retirado o espaço contido na string
// const nomeArray2 = nomeString2.split(', '); //Transformado string em array dividindo e removendo a partir da , virgula - parametro dentro da função split
// console.log(nomeArray);
// console.log(nomeArray2);
// * Convertendo arrays em string utilizando join
// const nomeArray = ['Luiz', 'Otavio', 'Miranda'];
// const nomeString = nomeArray.join(' '); //O argumento na função join é a qual caracter ira separar separar a string, no caso a string é separada por espaços
// console.log(nomeString);


// * delete, push, pop, unshift, shift
// nomes[2] = 'Leandro';
// console.log(nomes);
// delete nomes[2];
// console.log(nomes);
// nomes.push('oi');
// console.log(nomes);
// const removido = nomes.pop(); //remove o ultimo elemento do array, e armazena o elemento em uma variavel
// console.log(nomes);
// nomes.unshift('Hello')
// console.log(nomes);
// const removido = nomes.shift(); //remove o primeiro elemento do array realocando os indices, e armazena o elemento em uma variavel
// console.log(nomes);
