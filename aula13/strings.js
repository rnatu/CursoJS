/*     
let umaString = 'Um "texto"'; usar aspas duplas em uma string
let umaString = "Um \"texto\""; anular as aspas duplas dentro de uma string
let umaString = 'Um //texto'; para usar a barra em string
*/

/*
        indice   012345678
let umaString = 'Um texto';
        console.log(umaString[3]);
*/
let umaString = 'Um texto';
let outraString = 'O rato roeu a roupa do rei de roma.';
console.log(umaString.indexOf('texto')); //para saber qual o indice inicial da palavra
console.log(umaString.indexOf('o', 3)); //para saber o indice da letra a partir do indice 3 no caso
console.log(umaString.lastIndexOf('m', 3));//de traz para frente a opção acima.

console.log(umaString.replace('Um', 'Outro')); //substituição na string
console.log(outraString.replace(/r/g, '#')); //substituição com a flag para todos os caracteres na string
console.log(umaString.length); //numero de caracteres de uma string (OBS: o 0 conta como 1 caracter tambem)

//Fatia por indice passado
console.log(outraString.slice(2, 6)); //retira e exibe da string os indices selecionados
console.log(outraString.slice(-5, -1)); // retira e exibe da string os indices de traz para frente da string

//Divide por caracter selecionado
console.log(outraString.split('r')); //retira o caratere selecionado de toda a string
console.log(outraString.split(' ', 3)); //retira o caractere selecionado da string por um numero de vezes

//MAIUSCULO ou minusculo
console.log(outraString.toUpperCase()); //DEIXA A STRING TODA EM MAIÚSCULO
console.log(outraString.toLowerCase()); //deixa a string toda em minusculo


//Percorrer Strind achando o caracter pelo indice
console.log(umaString[4]); //percorre uma string achando o caractere pelo indice
console.log(umaString.charAt(6)); //percorre uma string achando o caractere pelo indice
console.log(umaString.charCodeAt(6)); //percorre uma string mostrando o code da tabela ASCII referente ao caractere


//formas de concatenar
console.log(`${umaString} em um lindo dia.`);
console.log(umaString + ' em um lindo dia.');
console.log(umaString.concat(' em',' um', ' lindo dia.'));



