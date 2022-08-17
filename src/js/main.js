import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlayer from './modules/playVideo';
import Difference from './modules/difference';
import Forms from './modules/forms';
import Acordion from './modules/acordion';
import Download from './modules/download';

window.addEventListener('DOMContentLoaded', () =>{
    const slider = new MainSlider({btns: '.next', page: '.page'});
    slider.render();

    const modulePageSlider = new MainSlider({
        page: '.moduleapp', btns: '.next'
    });
    modulePageSlider.render();

    const showUpSlider =  new MiniSlider({
        page: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true 
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        page: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoPlay: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        page: '.feed__slider-wrapper',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();

    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init();



    new Difference('.officerold', '.officernew', '.officer__card-item').init();

    const bigForm = new Forms('.form', 'input');
    bigForm.init();

    new Acordion('.plus__content').init();

    new Download('.download').init();


});