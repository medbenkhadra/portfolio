$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:2,
        loop:true,
        autoplay:true,
        autoplayHoverPause:true

    });
    $('.color-mode').click(function(){
      $('body').toggleClass('dark-mode')
    });
  });
  
  /*var options = {
    Strings:["","",""],
    typeSpeed:80,
    fadeOut: true,
    loop: true,
    showCursor: false,
  };
  var typed = new Typed(".element",options);*/
  const typed = new Typed('.element', {
    strings: ['UI Specialist', 'Mohamed ben khadra','Web Designer'],
    typeSpeed: 50,
    fadeOut :true,
    loop: true,
    showCursor:false,
    smartBackspace: true,
  });
  
  var myElement = document.querySelector(".navbar");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init();