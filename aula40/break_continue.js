const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for (let numero of numeros) {
    
//     if (numero === 2 || numero === 5) {
//         console.log('Pulei o numero '+numero);
//         continue; //pula para a proxima interação do laço e continua executando
//     };
    
    
//     console.log(numero);
    
//     if (numero === 7) {
//         console.log(`Achei o numero ${numero}, saindo...`);
//         break; //encerra o laço
//     };
// }

let i = 0;

while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o numero 2');
        i++; //Em laço While ou do while, sempre atualizar a variavel de controle antes do continue;
        continue;     
    }

    console.log(numero);

    if (numero === 7) {
        console.log('Achei o numero 7, saindo...');
        i++; //Em laço While, sempre atualizar a variavel de controle antes do break;
        break;
    }

    i++;
    
};


