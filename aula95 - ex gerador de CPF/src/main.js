import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

document.querySelector('.botao').addEventListener('click', GeraCPF.inserirCPF);

// (function() {
//     const gera = new GeraCPF;
//     const cpfGerado = document.querySelector('.cpf-gerado');
//     cpfGerado.innerHTML = gera.geraNovoCPF();
// })();