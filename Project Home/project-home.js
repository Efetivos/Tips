
var tlHoverweb = new TimelineMax ({paused:true})
	.from('#gig-web', 1,{x: 400, autoAlpha:0, ease: Power4.easeOut}).addPause().add('exit')
	.to('#gig-web',.1, {autoAlpha:0})


var tlHovervid = new TimelineMax ({paused:true})
	.from('#gig-vid', 1,{x: 400, autoAlpha:0, ease: Power4.easeOut}).addPause().add('exit')
	.to('#gig-vid',.1, {autoAlpha:0})


var tlHovermid = new TimelineMax ({paused:true})
	.from('#gig-mid', 1,{x: 400, autoAlpha:0, ease: Power4.easeOut}).addPause().add('exit')
	.to('#gig-mid',.1, {autoAlpha:0})

var tlHoverdes = new TimelineMax ({paused:true})
	.from('#gig-des', 1,{x: 400, autoAlpha:0, ease: Power4.easeOut}).addPause().add('exit')
	.to('#gig-des',.1, {autoAlpha:0})

$('#opt-web').mouseenter(function (){
	tlHoverweb.play(0);
	
})

$('#opt-web').mouseleave(function (){
	tlHoverweb.play('exit');
	
})

$('#opt-vid').mouseenter(function (){
	tlHovervid.play(0);
	
})

$('#opt-vid').mouseleave(function (){
	tlHovervid.play('exit');
	
})
$('#opt-mid').mouseenter(function (){
	tlHovermid.play(0);
	
})

$('#opt-mid').mouseleave(function (){
	tlHovermid.play('exit');
	
})
$('#opt-des').mouseenter(function (){
	tlHoverdes.play(0);
	
})

$('#opt-des').mouseleave(function (){
	tlHoverdes.play('exit');
	
})