$(document).ready(function() {  

	TweenMax.set('.pre-loading', {height:'100vh', width:'100vw'})
});




document.addEventListener("DOMContentLoaded", function(event) {
    window.onload = function() {
         window.requestAnimationFrame(function() {
			 


			 
var tlPhotos = new TimelineMax({repeat:-1})

	.from('#fader1', 1.5, {scaleY: 0, transformOrigin:'bottom right', ease: Power3.easeIn })
	.from('#w1', 0.00001, {autoAlpha: 0})
	.to('#fader1', 1.5, {scaleY: 0, transformOrigin:'top right', ease: Power2.easeOut })
	.from('#t1', 1.5, {y:700, ease: Power3.easeOut },'-=1.5')
	.to('#t1', 2, {delay:1.5, y:-700, ease: Power3.easeIn })

	.from('#fader2', 1.5, {scaleY: 0, transformOrigin:'bottom right', ease: Power3.easeIn },'-=1.5')
	.from('#w2', 0.00001, {autoAlpha: 0})
	.to('#fader2', 1.5, {scaleY: 0, transformOrigin:'top right', ease: Power4.easeOut })
	.from('#t2', 1.5, {y:700, ease: Power3.easeOut },'-=1.5')
	.to('#t2', 2, {delay:1.5, y:-700, ease: Power3.easeIn })

	.from('#fader3', 1.5, {scaleY: 0, transformOrigin:'bottom right', ease: Power3.easeIn },'-=1.5')
	.from('#w3', 0.00001, {autoAlpha: 0})
	.to('#fader3', 1.5, {scaleY: 0, transformOrigin:'top right', ease: Power4.easeOut })
	.from('#t3', 1.5, {y:700, ease: Power3.easeOut },'-=1.5')
	.to('#t3', 2, {delay:1.5, y:-700, ease: Power3.easeIn })

	.from('#fader4', 1.5, {scaleY: 0, transformOrigin:'bottom right', ease: Power3.easeIn },'-=1.5')
	.from('#w4', 0.00001, {autoAlpha: 0})
	.to('#fader4', 1.5, {scaleY: 0, transformOrigin:'top right', ease: Power4.easeOut })
	.from('#t4', 1.5, {y:700, ease: Power3.easeOut },'-=1.5')
	.to('#t4', 2, {delay:1.5, y:-700, ease: Power3.easeIn })

	.from('#fader5', 1.5, {scaleY: 0, transformOrigin:'bottom right', ease: Power3.easeIn },'-=1.5')
	.from('#w5', 0.00001, {autoAlpha: 0})
	.to('#fader5', 1.5, {scaleY: 0, transformOrigin:'top right', ease: Power4.easeOut })
	.from('#t5', 1.5, {y:700, ease: Power3.easeOut },'-=1.5')
	.to('#t5', 2, {delay:1.5, y:-700, ease: Power3.easeIn })

	.from('#fader6', 1.5, {scaleY: 0, transformOrigin:'bottom right', ease: Power3.easeIn },'-=1.5')
	.from('#w6', 0.00001, {autoAlpha: 0})
	.to('#fader6', 1.5, {scaleY: 0, transformOrigin:'top right', ease: Power4.easeOut })
	.from('#t6', 1.5, {y:700, ease: Power3.easeOut },'-=1.5')
	.to('#t6', 2, {delay:1.5, y:-700, ease: Power3.easeIn })

	.from('#faderFinal', 1.5, {scaleY: 0, transformOrigin:'bottom right', ease: Power3.easeIn },'-=1.5');

var tlMenu = new TimelineMax()
	.staggerFrom('.menu-mob, .logo', 1, {y:-150, ease: Power1.easeOut},0.1)
	.staggerFrom('.item-menu', 1, {y:-150, ease: Power1.easeOut},0.1,'-=.9')
		.from('.text-projetos', 1,{y:300, ease: Power1.easeOut},'-=.9')
	.from('.text-ser-efet', 1,{y:-200, ease: Power1.easeOut},'-=.9')

	


var tlNext = new TimelineMax({paused:true})
	.to('.main-body',.8,{y:60, autoAlpha:0, ease: Power2.easeIn})
	;
$('.text-projetos').click(function(){
	
	tlNext.play();
})

var tlMaster = new TimelineMax()
	.to('.pre-loading', 1.5,{scaleY:0,transformOrigin:'top right', ease: Power4.easeOut})
	.add(tlMenu,'-=1.3')
	.add(tlPhotos,'-=1')
	;

//FimChavesOnLoad			 
	});
      
  };
  
});






















			 
