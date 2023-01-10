let slider = document.querySelector('.swiper');
let width
let swiper;

console.log(slider);
function mobileSlider(){
    width = window.innerWidth;
    if(width < 768 && slider.dataset.mobile == "false"){
        swiper = new Swiper(slider,{
            slidesPerView: 1.25,
            spaceBetween: 16,
            loop:true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                },
            })
        slider.dataset.mobile = "true";
    } if (width >= 768 && slider.dataset.mobile == "true"){
        slider.dataset.mobile = "false";
        if (slider.classList.contains('swiper-initialized')) {
            swiper.destroy();
        }
    }
}

mobileSlider();

window.addEventListener('resize', () => {
    mobileSlider();
});





