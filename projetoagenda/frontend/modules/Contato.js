import validator from 'validator';

export default class Contato {
    constructor(className) {
        this.className = document.querySelector(className);
    }

    init() {
        this.event();
    }

    event(className) {
        this.className.addEventListener('submit', e => {
            e.preventDefault();
            const el = e.target;
            this.verify(el)
        })
    }

    verify(el) {
        const nomeInput = el.querySelector('input[name="nome"]');
        const emailInput = el.querySelector('input[name="email"]');
        
        if(!nomeInput.value) {
            alert('Campo nome precisa ser preenchido');
            return;
        }

        if(!validator.isEmail(emailInput.value)) {
            alert('Campo email precisa ser válido');
            return;
        }

        el.submit();
;    }
    


}