import Slider from './slider';

export default class MiniSlider extends Slider {
    constructor(page, next, prev, activeClass, animate, autoPlay) {
        super(page, next, prev, activeClass, animate, autoPlay);
    }

    
    decorizeSlide() {
        this.slides.forEach(slide =>{
            slide.classList.remove(this.activeClass);
            if(this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

 
        this.slides[0].classList.add(this.activeClass);
        if(this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        } 
    }

    nextSlide() {

    }

    bindTriggers() {
        this.next.addEventListener('click', () =>{
            
            this.page.appendChild(this.slides[0]);
            this.decorizeSlide();
        });
        this.prev.addEventListener('click', () =>{
            let active  = this.slides[this.slides.length-1];
            this.page.insertBefore(active, this.slides[0]);
            this.decorizeSlide();
        });
    }

    init () {
        try{
            this.page.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
            `;
            if(this.page.classList.contains('feed__slider-wrapper')) {
                this.page.parentNode.style.cssText = `
                display: flex;
                flex-wrap: wrap;
                overflow: hidden;
                align-items: flex-start;
                `;
            }
            this.bindTriggers();
            this.decorizeSlide();
            
    
            if(this.autoPlay) {
                setInterval(() => {
                    this.page.appendChild(this.slides[0]);
                    this.decorizeSlide();
                }, 5000);
            }
        } catch(e){}
    }
}