$(document).ready(function(){

  // active menu 
  $('ul li a').click(function(){
    $('li a').removeClass('active');
    $(this).addClass('active');
  })




    $(window).scroll(function() {
        if($(this).scrollTop() > 10){
            $("#nav-area").addClass("newNav");
        }else{
            $("#nav-area").removeClass("newNav");
        }
    });
    if ($(window).scrollTop() > 10) {
        $('#nav-area').addClass('newNav'); 
      }
    
    // mixit up
    
    var mixer = mixitup('.grid');
    
    // event-carousel
    $('.event-carousel').owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });

    $('.testi-caro').owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 3,
        responsive: {
            0: {
              items: 1
            },
            768: {
              items: 2
            },
            992: {
              items: 3
            }
          }
    });



    // mobile menu
    $(".menu-btn").click(function(){
        $(".nav-ul").fadeIn();    });
    // hide menu
    $(".close-btn").click(function(){
        $(".nav-ul").fadeOut('fast');
    });

    // aos jquery plugin 
    AOS.init({ 
      easing: 'ease',
      duration: 1000,
      once: true
    })


        
});







  