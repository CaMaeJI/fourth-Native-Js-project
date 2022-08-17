export default class Download {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg';
    }

    downloadIteam(path) {
        const element = document.createElement('a');

        element.setAttribute('href', path);
        element.setAttribute('download', 'picture');
        element.style.display = 'none';

        element.click();
        element.remove();
    }

    init() {
        this.btns.forEach(btn =>{
            btn.addEventListener('click', () =>{
                this.downloadIteam(this.path);
            });
        });
    }
}