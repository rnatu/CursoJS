/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite

O if Pode ser usado sozinho
Sempre que utilizo a palavra else ou else if, preciso de um if antes
Posso ter varios else if na checagem
Só posso ter um else na checagem
*/
const hora = 14;

if (hora >= 0 && hora <= 11){
    console.log('Bom Dia!');
} else if (hora >= 12 && hora <=17){
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23){
    console.log('Boa noite!');    
} else {
    console.log('Olá');
    
}



const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa');
    
} else {
    console.log('Não vou sair de casa');
    
}