(function () {

    function Calculadora() {

        this.display = document.querySelector('.display');




        // * Metodos 
        this.inicia = () => {
            this.clique();
            this.enter();
        };

        this.enter = () => {
            this.display.addEventListener('keypress', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })

        };

        this.clique = () => {
            document.addEventListener('click', e => {
                const el = e.target;
                //console.log(el);
                if (el.classList.contains('btn-num')) this.addNumDisplay(el.innerText);

                if (el.classList.contains('btn-clear')) this.display.value = '';
                
                if (el.classList.contains('btn-del')) this.del();

                if (el.classList.contains('btn-eq')) this.realizaConta();
            })
        }

        this.del = () => this.display.value = this.display.value.slice(0, -1);
        
            // * removido os () em volta do valor, pois é um unico parametro //removido tambem as {} da do método, pois retorna uma linha só
        this.addNumDisplay = valor => this.display.value += valor;

        this.realizaConta = () => {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if (!conta && conta !== 0) {
                    alert('Conta Inválida');
                    return;
                }
                this.display.value = conta;
            } catch (error) {
                alert('Conta invalida');
                return;
            }
        };





    };

    const calculadora = new Calculadora();
    calculadora.inicia();
    console.log(calculadora);


})();