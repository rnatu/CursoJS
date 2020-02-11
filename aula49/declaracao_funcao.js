//Declaração de função (Function hoisting)
falaOi();

function falaOi () {
    console.log('Oi');
    console.log('');
};

//First-Class Objects (Objetos de primeira classe)
// function expression
const souUmDado = function () {
    console.log('Sou um dado');
    console.log('');
};

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:')
    funcao();
};
executaFuncao(souUmDado);


// Arrow Function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
    console.log('');
}

funcaoArrow();


// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};

obj.falar();