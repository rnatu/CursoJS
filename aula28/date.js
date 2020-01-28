//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

//MARCO ZERO
// const tresHoras = 60 * 60 * 3 * 1000; //sec * sec * hora * milesegundos  
// const umDia = 60 * 60 * 24 * 1000; //sec * sec * hora * milesegundos
// const data = new Date(0 + tresHoras); //01/01/1970 Timestamp unix ou época unix ----- 3 horas a mais por conta do fuso horario GMT -03:00

//const data = new Date(2019, 3, 20, 15, 14, 27); // a, m, d, h, M, s, ms

// const data = new Date('2019-04-20 20:20:59');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); //Mês inicia do zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado
// console.log(data.toString());

// console.log(Date.now()); //Data em milésimos de segundos atual
function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`
 }

function formataData(date){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getMonth());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
