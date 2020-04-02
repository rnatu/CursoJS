class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
        }

    //Método de instância
    aumentarVolume() {
        this.volume += 2;
    }

    //Método de instância
    diminuirVolume() {
        this.volume -= 2;
    }

    //Método de estático
    static trocaPilha(){
        console.log('Trocando pilha de todos os controles');
    }

    //Método de estático -> não tem acesso aos dados da instância
    static soma(x, y) {
        return x + y;
    }
}
 
//instanciando o objeto
const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();//Método de instância
controle1.aumentarVolume();//Método de instância
controle1.aumentarVolume();//Método de instância
console.log(controle1);

// controle1.trocaPilha(); não funciona por ser estático

//Utilizando o método estático
ControleRemoto.trocaPilha();
            //Utilizando o método estático
console.log(ControleRemoto.soma(2, 5));
