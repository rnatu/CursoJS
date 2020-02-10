const h1 = document.querySelector('.container h1');
h1.innerHTML = '';

const data = new Date(); //const data recebe data atual

h1.innerHTML = data.toLocaleDateString('pt-BR', { 
    dateStyle: 'full', timeStyle: 'medium' 
});

// const diaSemanaTexto = getDiaSemana(data.getDay());

// const diaMes = data.getDate();
// const diaDoMes = diaMes < 10 ? `0${diaMes}` : `${diaMes}`; //adicionando zero a esquerda

// const mesTexto = getMes(data.getMonth());

// const ano = data.getFullYear();


// const hora = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;


// function getMes(mes) {
//   const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
//   return meses[mes]; 
// }


// function getDiaSemana(diaSemana) {

//     switch (diaSemana) {
//         case 0:
//             diaSemana = 'Domingo';
//             return diaSemana;
//         case 1:
//             diaSemana = 'Segunda-feira';
//             return diaSemana;
//         case 2:
//             diaSemana = 'Terça-feira';
//             return diaSemana;
//         case 3:
//             diaSemana = 'Quarta-feira';
//             return diaSemana;
//         case 4:
//             diaSemana = 'Quinta-feira';
//             return diaSemana;
//         case 5:
//             diaSemana = 'Sexta-feira';
//             return diaSemana;
//         case 6:
//             diaSemana = 'Sábado';
//             return diaSemana;

//         default:
//             diaSemana = '';
//             return diaSemana;
//     }
// }

// h1.innerHTML = `<strong>${diaSemanaTexto}, ${diaDoMes} de ${mesTexto} de ${ano} <br> ${hora}</strong>`


