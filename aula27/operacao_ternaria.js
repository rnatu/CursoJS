// (condicao) ? 'valor para verdadeiro' : 'valor para falso';

const pontuacaoUsuario = 999;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
console.log(nivelUsuario);
//OU
console.log(pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal');

const corUsuario = 'null';
const corPadrao = corUsuario || 'preta';


// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário Normal');    
// }

