var wScreen = $(window).width()



$('.logo').click(function(){
    
    TweenMax.to('.holder',3,{x: -wScreen, ease: Power3.easeOut})
});

Barba.Pjax.start();