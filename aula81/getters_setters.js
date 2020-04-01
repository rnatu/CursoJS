const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }


    //Posso ter só getter ou setter;
    set velocidade(valor){
        // console.log('SETTER');
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade(){
        // console.log('GETTER');
        return this[_velocidade];
    }


    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

// const c1 = new Carro('fusca', 0);

// for(let i = 0; i <= 200; i++) {
//     c1.acelerar();
// }
// console.log(c1);

// for(let i = c1[_velocidade]; i >= 0; i--) {
//     c1.freiar();
// }
// console.log(c1);

// c1[_velocidade] = 1500;
// console.log(c1);

const c1 = new Carro('Fusca', 0);

// for(let i = 0; i <= 200; i++) {
//         c1.acelerar();
//     }
c1.velocidade = 95;
c1.velocidade = 158; //utilizando setter
console.log(c1.velocidade)//utilizando getter
console.log();



class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return `Olá, meu nome completo é: ${this.nome} ${this.sobrenome}`;
    }

    set nomeCompleto(valor){
        valor = valor.split(' ')//separa a string utilizando o denomidador, no caso o espaço, e gera um array com os valores
        this.nome = valor.shift();//remove o primeiro valor do array e retorna esse elemento, e atribuindo ao this.nome
        this.sobrenome = valor.join(' '); //juntando os elementos do array em uma string e utilizando um separador, no caso o espaço
    }
}

const p1 = new Pessoa('Renato', 'Xavier');
p1.nomeCompleto = 'Felipe Roberto Silva'; //utilizando o set
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto); //utilizando o get
