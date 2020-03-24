// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if(this.saldo < valor) {
        console.log('Saldo insuficiente');
        this.verSaldo();
        return;
    };

    this.saldo -= valor;
    console.log('Saque Realizado');
    this.verSaldo();
};
Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    console.log('Valor Depositado');
    this.verSaldo();
};
Conta.prototype.verSaldo = function () {
    console.log(`Ag./Conta: ${this.agencia} / ${this.conta} | ` + `Saldo R$${this.saldo.toFixed(2)}`);
    
};

const conta1 = new Conta(2354, 22588, 10);
console.log(conta1);
console.log();

conta1.depositar(11);
conta1.depositar(10);

conta1.sacar(30);
conta1.sacar(10);


function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log('Saldo insuficiente');
        this.verSaldo();
        return;
    };

    this.saldo -= valor;
    console.log('Saque Realizado');
    this.verSaldo();
};

console.log('');

const cc = new ContaCorrente(1258, 55848, 0, 100);
cc.depositar(10);
cc.sacar(90);
cc.sacar(20);
cc.sacar(10);

console.log('');


// Herança
function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaCorrente;

const cp = new ContaPoupanca(12, 33, 0);
cp.depositar(10);
cp.sacar(110);
cp.sacar(1);