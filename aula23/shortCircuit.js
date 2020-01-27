/*
&& -> false && true -> false "O valor MESMO"
|| -> true || false -> vai retornar "vai retornar o valor verdadeiro"

Falsy -> false, 0, '', ``, "", null, undefined, NaN

*/

console.log('Renato' && 'Maria' && 0);

function falaOi(){
    return 'Oi';
}

const vaiExecutar = 'Joãozinho'; //false é exibido false no log 

console.log(vaiExecutar && falaOi());




console.log(0 || false || null || 'Luiz Otávio' || true);

const corUsuario = null;
const corPadrão = corUsuario || 'preto';

console.log(corPadrão);

