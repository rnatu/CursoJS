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

f.push('A');
console.log(f, g);

g.pop();
console.log(f, g);


let h = [...f]; //spread - cópia de um tipo mútavel
f.push('Renato')
console.log(h);
console.log(' ');




const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
};

const p = {...pessoa}; //spread - cópia de um tipo mútavel

pessoa.nome = 'João'
console.log(p);
console.log(pessoa);




