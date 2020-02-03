/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, sybmbol) - VALOR copiados

Referência (mútavel) - array, object, function - Passados por referência
*/

let a = '1';
let b = a; //cópia
console.log(a, b);
a = 2;
console.log(a, b);
console.log(' ');



let f = [1, 2 , 3];
let g = f; //referencia -> pois apontam para o mesmo valor na memória
console.log(f, g);

f.push('A'); //push adiciona no final do array
console.log(f, g);

g.pop(); //pop remove do final do array
console.log(f, g);
console.log('');



let h = [...f]; //spread - cópia de um tipo mútavel
f.unshift('Renato') //unshift adiciona no começo do array
console.log(h, f);
console.log(' ');




const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
};

const p = {...pessoa}; //spread - cópia de um tipo mútavel

pessoa.nome = 'João'
console.log(p);
console.log(pessoa);




