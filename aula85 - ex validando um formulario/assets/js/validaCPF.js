// 705.484.450-52 070.987.720-03

class ValidaCPF {
    constructor(cpfEnviado) {


        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }





    éSequência() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        // console.log(digito1);
        // console.log(digito2);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    //método estático
    static geraDigito(cpfSemDigitos) {
        let total = 0
        let reverso = cpfSemDigitos.length + 1;

        for (let strigNumerica of cpfSemDigitos) {
            total += Number(strigNumerica) * reverso;
            reverso--;
        }

        const digito = 11 - (total % 11);

        //console.log(total);
        return digito <= 9 ? String(digito) : '0';

    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.éSequência()) return false;
        this.geraNovoCpf();
        return this.novoCPF === this.cpfLimpo;
    }
}

// let validacpf = new ValidaCPF('070.987.720-03');
// //let validacpf = new ValidaCPF('999.999.999-99');

// //console.log(validacpf.valida());
// if (validacpf.valida()){
//     console.log('CPF Válido');
// } else {
//     console.log('CPF Inválido');
// }



