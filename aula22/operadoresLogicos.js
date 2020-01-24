/*
Operadores Lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/



const usuario = 'Renato';
const senha = '12345';

const vaiLogar = usuario === 'Renato' && senha === '12345';
console.log(vaiLogar);

console.log('');


const naoLogar = usuario !== 'Renato' || senha !== '12345';
console.log(naoLogar);

