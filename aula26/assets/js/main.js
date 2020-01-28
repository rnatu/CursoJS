
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
        setResultado('Peso inválido', false)
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }
    
const imc = getImc(peso, altura);
const nivelImc = getNivelImc(imc);

const msg = `seu IMC é ${imc} (${nivelImc}).`;

setResultado(msg, true);

});


function getImc(peso, altura){
const imc = peso / altura ** 2;
return imc.toFixed(2);
};

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
    'Obesidade grau 2', 'Obesidade grau 3'];

    //verificando o IMC e retornando o index do array
    if (imc >= 39.9) {
        return nivel[5];
    }
    if (imc >= 34.9) {
        return nivel[4];
    }
    if (imc >= 29.9) {
        return nivel[3];
    }
    if (imc >= 24.9) {
        return nivel[2];
    }
    if (imc >= 18.5) {
        return nivel[1];
    }
    if (imc > 18.5) {
        return nivel[0];
    }

}

function criaP (){
    const p = document.createElement('p'); //criando um paragrafo -> ('p') e armazenando em uma const
    return p;
};


function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ``; //limpar

    const p = criaP(); //chama a função de criar um paragrafo e armazena em uma const
    
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    
    p.innerHTML = msg  
    resultado.appendChild(p); //cria um elemento filho
};





