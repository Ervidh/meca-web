document.addEventListener('DOMContentLoaded', function () {
var swiper = new Swiper(".myswiper-1", {
    slidesPerView:1,
    spaceBetween:30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable:true,
    },
    navigation: {
     nextEl:".swiper-button-next",
     prevEl:".swiper-button-prev",
    },
});



var swiper = new Swiper(".myswiper-2", {
    slidesPerView:4,
    spaceBetween: 50,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints : {
        0: {
            slidesPerView:1,
        },
        520: {
            slidesPerView:2,
        },
        950: {
            slidesPerView:3,
        },
        1400: {
            slidesPerView:4,
        }
    }
});

});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input){
    input.addEventListener("change", function() {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById("swiper" + id);
        thisSwiper.swiper.update();
    })
});