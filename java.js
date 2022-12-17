window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.backgroundColor = "rgb(20,20,20)";
        document.getElementById("responsive-list").style.backgroundColor = "var(--colorOne)";
    }
    else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("responsive-list").style.backgroundColor = "transparent";
    }
}


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 5,
    slidesPerView: 2,
    freeMode: true,
    loopAdditionalSlides: 5,
    speed: 500,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints:{
      //when window width is >= 640px
      640:{
          slidesPerView: 4,
          slidesPerGroup: 3,
          freeMode: false,
          speed: 1200,
      },

      1096:{
        slidesPerView: 5,
        slidesPerGroup: 5,
        freeMode: false,
        speed: 1200,
      },
    },
  
  });