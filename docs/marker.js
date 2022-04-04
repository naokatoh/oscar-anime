$(window).scroll(function (){
    $(".js-markerScrollAnimation").each(function(){
      var position = $(this).offset().top; 
      var scroll = $(window).scrollTop(); 
      var windowHeight = $(window).height(); 
      if (scroll > position - windowHeight){ 
        $(this).addClass('is-active'); 
      }
    });
});