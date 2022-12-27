$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
       // adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow:'<button type="button" class="slick-prev"><img src="img/icons/arrow_left.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="img/icons/arrow_right.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows:false
              }
            },
            {
              breakpoint: 767,
              settings: {
                dots: true,
                arrows:false
              }
            },
            {
              breakpoint: 575,
              settings: {
                dots: true,
                arrows:false,
                infinite:true
              }
            }
        ]
    });
  });