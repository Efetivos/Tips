	var controller = new ScrollMagic.Controller();

    
  $('.bora').each(function(){ 
    //Build Scene
	var scene = new ScrollMagic.Scene({
		triggerElement: this,
      triggerHook: 0.75
    })
    .setTween(this, 0.5, {
      backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
    
    });