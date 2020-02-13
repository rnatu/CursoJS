// Factory function (função fabrica)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre nada') {
            return `${this.nome} está ${assunto}`;
        },

        altura: altura,
        peso: peso,

        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
};

const p1 = criaPessoa('Luiz', 'Otavio', 1.60, 60);
const p2 = criaPessoa('Renato', 'Xavier', 1.80, 80);

p1.nomeCompleto = 'Maria Janice de Oliveira'
console.log(p1.nomeCompleto);
console.log(p1.fala());
console.log('');

// console.log(p1);
// console.log(p2);
// console.log('');

// console.log(p2.fala('falando sobre Python'));
// console.log(p1.fala('falando sobre JS'));
// console.log('');


// console.log(p1.imc());
// console.log(p2.imc());
// console.log('');



