/*var tl = new TimelineMax({repeat:-1,yoyo:true})
	.to('#photo1',1,{zIndex:1})
	.to('#photo2',1,{zIndex:1})
	.to('#photo3',1,{zIndex:1})
	.to('#photo3',1,{zIndex:0})
	.to('#photo2',1,{zIndex:0})

	; */

TweenLite.set(".photo", {transformStyle:"preserve-3d"});
TweenLite.set(".ctn",  {perspective:400});



var tlScroll= new TimelineMax({repeatDelay:1, repeat:-1})
	.to('.photo', 2, {rotationX: 10, ease:Power4.easeOut})
  	.to('.photo',2,{scale:.5,ease:Power4.easeOut},'-=2')
  	.to(".img",2,{scale:1.2,ease:Power2.easeOut},'-=2')
	.to('.photo', 1, {rotationX: 0, ease:Power1.easeOut},'-=1.7')
	//===
	.to(window, 2, {scrollTo: '#ctn2', ease: Power4.easeInOut}) //SCROLLTO
	.to(".bg",.5, {css:{className:"bg2"}},'-=1') //CHANGE BG
	//===
	.to('.photo', 2, {rotationX: -10, ease:Power4.easeOut})
  	.to('.photo',2,{scale: 1,ease:Power4.easeOut},'-=2')
  	.to(".img",2,{scale: 1,ease:Power2.easeOut},'-=2')
	.to('.photo', 1, {rotationX: 0, ease:Power1.easeOut},'-=1.7')

	



	//=========== NEXT > PHOTO 3
	.to('.photo', 2, {rotationX: 10, ease:Power4.easeOut})
  	.to('.photo',2,{scale:.5,ease:Power4.easeOut},'-=2')
  	.to(".img",2,{scale:1.2,ease:Power2.easeOut},'-=2')
	.to('.photo', 1, {rotationX: 0, ease:Power1.easeOut},'-=1.7')
	//===
	.to(window, 2, {scrollTo: '#ctn3', ease: Power4.easeInOut})//SCROLLTO  
	.to(".bg", .5, {css:{className:"bg3"}},'-=1')//CHANGE BG
	//===
	.to('.photo', 2, {rotationX: -10, ease:Power4.easeOut})
  	.to('.photo',2,{scale: 1,ease:Power4.easeOut},'-=2')
  	.to(".img",2,{scale: 1,ease:Power2.easeOut},'-=2')
	.to('.photo', 1, {rotationX: 0, ease:Power1.easeOut},'-=1.7')


