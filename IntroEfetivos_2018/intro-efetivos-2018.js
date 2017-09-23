//NiceScroll
$(document).ready(function() {  
    
    $("html").niceScroll({
    	cursoropacitymax: 0.5,
		autohidemode: false,
        zindex: "999",
       scrollspeed: 300,
        Mousescrollstep : 100,
        Smoothscroll : true 
    
    });
	TweenMax.set('#logosvg-efet',{opacity:0})
});


document.addEventListener("DOMContentLoaded", function(event) {
    window.onload = function() {
         window.requestAnimationFrame(function() {

var cursorDecor = $('#cursor-decor')

$(document).on('mousemove', function(e){
    $(cursorDecor).css({
       left:  e.pageX -16,
       top:   e.pageY - 16
    });
});


$('#target, a').hover(
  function() {
    TweenMax.to(cursorDecor, .5,{scale:0.2});
    TweenMax.to(this, .5,{scale:0.8});
    TweenMax.to('#middle', .5,{scale:5});
  } , function (){
    TweenMax.to(cursorDecor, .5,{scale:1});
     TweenMax.to(this, .5,{scale:1});
    TweenMax.to('#middle', .5,{scale:1});
  }
)

var  mySplitText = new SplitText("#seja-mob,#seja-desk", {type:"words,chars"}), 
    chars = mySplitText.chars,
    mySplitText2 = new SplitText(".text-efetivos", {type:"chars"}), 
    chars2 = mySplitText2.chars;
			 
			 
var tlPreload = new TimelineMax()
	
	.set('.ctn-logo',{zIndex:100})
	.from('#logosvg-efet', 2, {drawSVG: '0%', ease: Power2.easeInOut})
	.from('#logo-efetivos', 2, {scale:4, ease: Power2.easeOut},'-=1')
	.to('#logosvg-efet',2, {fill: '#fff'},'-=1.7')
	.from('.ctn-logo',2,{y:180, ease: Power4.easeInOut},'-=1')
	.to('.preload', 2,{autoAlpha:0},'-=1.5')
	.staggerFrom(chars, 2.5, {opacity:0, y:40, ease:Back.easeOut}, 0.02, "-=1.8")

	.staggerFrom(chars2, .8,{opacity:0, scale:0, y:20, rotationY:280, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.05,"-=1.2")
	.staggerFrom('#target,#middle', .6,{scale:0,  ease:Back.easeOut}, 0.05,"-=.2")
	.staggerFrom('#orcamento,#contato', 1.2,{opacity:0, y:60,  ease:Back.easeOut}, 0.05,"-=.4")
	;
		
//FimChavesOnLoad			 
	});
      
  };
  
});
