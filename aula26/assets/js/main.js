
// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');
form.addEventListener('submit', function(e) {
e.preventDefault(); // Impedindo o autorefresh ao cliclar no botão
console.log('Evento previnido');

// Valor de peso pelo target selecionado
const inputPeso = e.target.querySelector('#peso');
// Armazenando os valores captados
const peso = Number(inputPeso.value);

// Valor de peso pelo target selecionado
const inputAltura = e.target.querySelector('#altura');
// Armazenando os valores captados
const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso invalido', false)
    }

    if (!altura) {
        setResultado('Altura invalido', false)
    }
    
const imc = getImc(peso, altura);

console.log(imc);
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal',]
}



function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}


function criaP (){
    const p = document.createElement('p'); //criando um paragrafo -> ('p') e armazenando em uma const
    p.classList.add('paragrafo-resultado') //adicionando uma classe ao paragrafo
    return p;
};


function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ``; //limpar
    
    const p = criaP(); //chama a função de criar um paragrafo e armazena em uma const

    resultado.appendChild(p); //cria um elemento filho
    p.innerHTML = msg  
};

setResultado(`teste`);



