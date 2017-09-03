$(document).ready(function() {  
    
    $("html").niceScroll({
        zindex: "999",
       scrollspeed: 300,
        Mousescrollstep : 100,
        Smoothscroll : true 
    
    });
});
     



var controller = new ScrollMagic.Controller();


//======ANIMA CADA BORA
  $('.bora').each(function(){ 
    //Build Scene
	var scene = new ScrollMagic.Scene({
		triggerElement: this,
        duration: 800,
      triggerHook: 0.75
        
    })
    
    .setTween(this, {css:{right:400}}) // trigger a TweenMax.to tween
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
    
    });


//====== MUDAR COR BG
var body = $('body');

var scene = new ScrollMagic.Scene({
		triggerElement: '.bora',
        duration: 500,
      triggerHook: 0.1
    })
    .setTween(body, {css:{backgroundColor:"#fff"}}) // trigger a TweenMax.to tween
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);




//====== PIN OUTRO

var scene = new ScrollMagic.Scene({
		triggerElement: '.outro',
        duration: 500,
      triggerHook: 0.5
    })

    .setPin('.outro') // trigger a TweenMax.to tween
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
