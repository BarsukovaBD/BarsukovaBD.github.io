const slider = document.querySelector('.slider')
const slides = slider.querySelector('.slides')
let currentSlide = 0
const slidesCount = slides.querySelectorAll('.slide').length

function slide(next){
    if(next){
        currentSlide++
        if(currentSlide >= slidesCount) currentSlide = 0
    }else{
        currentSlide--
        if(currentSlide < 0) currentSlide = slidesCount - 1
    }
    const offset = -currentSlide * 100
    slides.style.transform = `translateX(${offset}%)`
}