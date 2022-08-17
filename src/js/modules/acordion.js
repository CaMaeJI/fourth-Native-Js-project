export default class Acordion {
    constructor(btn) {
        this.btn = document.querySelectorAll(btn);
    }

    init() {
        const text = document.createElement('div');
        text.style.display = 'none';
        text.style.cssText = `margin-top: 15px;`;
        
        text.textContent = `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi at provident saepe dolore expedita debitis et iusto placeat voluptatem, quas ipsa animi fuga delectus facilis asperiores officia consequatur ipsum. Ipsam!`;

       this.btn.forEach(btn =>{
            btn.addEventListener('click', () =>{
                btn.closest('.module__info-show').after(text);
                if(text.style.display == 'block') {
                    text.style.display = 'none';
                } else {
                    text.classList.add('animated', 'slideInUp');
                    text.style.display = 'block';
                }
            });
       });
    }
}