/*var tl = new TimelineMax({repeat:-1,yoyo:true})
	.to('#photo1',1,{zIndex:1})
	.to('#photo2',1,{zIndex:1})
	.to('#photo3',1,{zIndex:1})
	.to('#photo3',1,{zIndex:0})
	.to('#photo2',1,{zIndex:0})

	; */

var tlScroll= new TimelineMax({delay:1})
	.to('.photo',.8,{scale:0.8, ease:Power2.easeOut})
	.to(window, 2, {scrollTo: '#ctn2', ease: Power4.easeInOut})
	.to(".bg",.5, {css:{className:"bg2"}})
	.to('.photo',.8,{scale:1, ease:Power2.easeOut})


	.to('.photo',.8,{scale:0.8, ease:Power2.easeOut})
	.to(window, 2, {scrollTo: '#ctn3', ease: Power4.easeInOut})
	.to(".bg", .5, {css:{className:"bg3"}})
	.to('.photo',.8,{scale:1, ease:Power2.easeOut})