// 705.484.450-52 070.987.720-03
/*
705.484.450

Primeiro dígito
7x 0x 5x 4x 8x 4x 4x 5x 0x -> Nove primeiros digitos do cpf
10 9  8  7  6  5  4  3  2 -> Multiplicar pela sequencia regressiva
70 0  40 28 48 20 19 15 0 = 237 <- Soma de todo o resultado
11 - (237 % 11) = 5  -> se o resultado for maior que 9, consideramos 0. (Primeiro Dígito)

Segundo dígito
7x 0x 5x 4x 8x 4x 4x 5x 0x 5x <- Primeido digito adicionado
11 10 9  8  7  6  5  4  3  2 -> Multiplicar pela sequencia regressiva
77 0  45 32 56 24 20 20 0  10 = 284
11 - (284 % 11) = 2 -> se o resultado for maior que 9, consideramos 0. (Segundo Dígito)

705.484.450-52 === 705.484.450-52
*/



function ValidaCPF(cpfEnviado) {


    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    //console.log(digito1);
    const digito2 = this.criaDigito(cpfParcial + digito1); //cpfParcial está como string, adicionando o digito1 no final
    //console.log(digito2);
    const novoCpf = cpfParcial + digito1 + digito2;
    //console.log(novoCpf);

    return novoCpf === this.cpfLimpo
}

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    //console.log(cpfParcial);    
    const cpfArray = Array.from(cpfParcial);
    //console.log(cpfArray);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce(function (ac, val) {
        //console.log(val, regressivo, regressivo * val);
        ac += (regressivo * Number(val));

        regressivo--;
        return ac;
    }, 0);

    //console.log(total);
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}


const cpf = new ValidaCPF('705.484.450-52');
//console.log(cpf);

//console.log(cpf.valida());
if(cpf.valida()) {
    console.log('CPF Válido');
} else {
    console.log('CPF Inválido');
}








// const cpf = '0705.484.450-52';
// let cpfLimpo = cpf.replace(/\D+/g, ''); //substituindo tudo que não for numero por '' <- nada)
// cpfArray = Array.from(cpfLimpo);
// console.log(cpfArray);

// console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));