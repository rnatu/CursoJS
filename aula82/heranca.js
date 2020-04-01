class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado) {
            console.log(this.nome+' '+' já ligado'); 
           return;
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado) {
            console.log(this.nome+' '+'já desligado');
            return;
        }
        this.ligado = false;
    }
}



class Smartphone extends DispositivoEletronico{ //herdando da classe DispositivoEletronico
    constructor(nome, cor, modelo){
        super(nome); //chamar o construtor da classe pai e executar nesta classe
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S2');
console.log(s1);
console.log();

class VideoGame extends Smartphone {
    constructor(nome, cor, modelo, ano) {
        super(nome, cor, modelo);
        this.ano = ano;
    }
}

const v1 = new VideoGame('Playstation 5', 'Preto', 'PS5', 2020);
v1.ligar();
console.log(v1);
console.log();



class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

     ligar(){
         console.log('Voce alterou o metodo ligar.');
    }

    falaOi(){
        console.log('oi');
    }
}

const t1 = new Tablet('Ipad', true);
t1.ligar();
console.log(t1.falaOi());
console.log();



class Animal{
    constructor(patas) {
      this.patas = patas;
    }
  
    respirar() {
      console.log("Esse animal respira!");
    }
  }

  // SUBCLASSE
class Cachorro extends Animal{
    constructor(patas) {
      super(patas);
    }
  
    latir() {
      console.log("Esse cachorro late!");
    }
  }
  
  // OBJETO CACHORRO
  let cachorro = new Cachorro(4);
  cachorro.respirar(); // Esse animal respira!
  cachorro.latir();    // Esse cachorro late!