const verdadeira = true;
//let tem escopo de bloco {.... bloco}
// var só tem escopo de função

let nome = 'luiz'; //criando

var nome2 = 'Roberto'; //criando
var nome2 = 'Otávio'; //Redeclarada

if (verdadeira) {
    let nome = 'outra coisa'; //criando
    var nome2 = 'Rogério'; //redeclarando
    console.log(nome,nome2);

    if (verdadeira) {
        let nome = 'Ronaldo'; //criando
        var nome2 = 'Marcelo'; //redeclarando    
    console.log(nome, nome2);
    
    }
    
}




function falaNome () {
    console.log(nome, nome2);
}

falaNome();