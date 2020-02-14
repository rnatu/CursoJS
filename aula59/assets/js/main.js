(function () {


    function criaCalculadora() {

        return {

            display: document.querySelector('.display'),
            btnClear: document.querySelector('.btnClear'),





            inicia() {
                this.cliqueBotoes();
                this.pressionaEnter();
            },

            pressionaEnter() {
                this.display.addEventListener('keypress', e => {
                    if (e.keyCode === 13) {
                        this.realizaConta();
                    }
                })
            },

            cliqueBotoes() {
                document.addEventListener('click', e => { //arrow function mantem a referencia do this, não sendo necessesário a utilização do .bind(this)
                    const el = e.target;

                    if (el.classList.contains('btn-num')) {
                        this.btnParaDisplay(el.innerText);
                    }

                    if (el.classList.contains('btn-clear')) {
                        this.display.value = '';
                    }

                    if (el.classList.contains('btn-del')) {
                        this.apagaUm();
                    }

                    if (el.classList.contains('btn-eq')) {
                        this.realizaConta();
                    }
                });
            },

            apagaUm() {
                this.display.value = this.display.value.slice(0, -1);
            },

            btnParaDisplay(valor) {
                this.display.value += valor;
            },

            realizaConta() {
                let conta = this.display.value;

                try {
                    conta = eval(conta);
                    if (!conta) {
                        alert('conta invalida!!!');
                        return;
                    }
                    this.display.value = conta;

                } catch (e) {
                    alert('Conta inválida');
                    return;
                }
            },

        };
    }

    const calculadora = criaCalculadora();
    calculadora.inicia();

})();