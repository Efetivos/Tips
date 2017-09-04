
var tlHoverweb = new TimelineMax ({paused:true})
	.from('#gig-web', 1.5,{x: -400, autoAlpha:0, ease: Power4.easeOut}).addPause().add('exit')
	.to('#gig-web',.1, {autoAlpha:0})


var tlHovervid = new TimelineMax ({paused:true})
	.from('#gig-vid', 1.5,{x: -400, autoAlpha:0, ease: Power4.easeOut}).addPause().add('exit')
	.to('#gig-vid',.1, {autoAlpha:0})


var tlHovermid = new TimelineMax ({paused:true})
	.from('#gig-mid', 1.5,{x: -400, autoAlpha:0, ease: Power4.easeOut}).addPause().add('exit')
	.to('#gig-mid',.1, {autoAlpha:0})

var tlHoverdes = new TimelineMax ({paused:true})
	.from('#gig-des', 1.5,{x: -400, autoAlpha:0, ease: Power4.easeOut}).addPause().add('exit')
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


	var tlHoverPweb = new TimelineMax ({paused:true})
	.set('.title-gig',{display:"none"})
	.to('#photo-efetivos',1.5,{height:0, right:0, ease: Power4.easeIn})
	.to('body',1,{backgroundColor:"#f2f2f2"},0)
	.to('.ctnr-options',1.5,{autoAlpha:0, y:-100, ease: Power3.easeInOut},'-=.5')
	.from('#photo-web', 1.5,{height: 0, ease: Power3.easeInOut},'-=1.5')
	.from('#serv-web', 1,{y:65},'-=.8')
	.from('#desc-web', 1,{y:165},'-=.8')
	.from('#a-web', 1,{autoAlpha:0, y:50},'-=.6')
	.from('#trg-web',1,{autoAlpha:0});

$('#opt-web').click(function (){
	tlHoverweb.play('exit');
	tlHoverPweb.play();
	
})

$('#trg-web').click(function (){
	tlHoverPweb.reverse()
	
})


	var tlHoverPvid = new TimelineMax ({paused:true})
	.set('.title-gig',{display:"none"})
	.to('#photo-efetivos',1.5,{height:0, right:0, ease: Power4.easeIn})
	.to('body',1,{backgroundColor:"#f2f2f2"},0)
	.to('.ctnr-options',1.5,{autoAlpha:0, y:-100, ease: Power3.easeInOut},'-=.5')
	.from('#photo-vid', 1.5,{height: 0, ease: Power3.easeInOut},'-=1.5')
	.from('#serv-vid', 1,{y:65},'-=.8')
	.from('#desc-vid', 1,{y:165},'-=.8')
	.from('#a-vid', 1,{autoAlpha:0, y:50},'-=.6')
	.from('#trg-vid',1,{autoAlpha:0});

$('#opt-vid').click(function (){
	tlHovervid.play('exit');
	tlHoverPvid.play()
	
})

$('#trg-vid').click(function (){
	tlHoverPvid.reverse()
	
})


	var tlHoverPmid = new TimelineMax ({paused:true})
	.set('.title-gig',{display:"none"})
	.to('#photo-efetivos',1.5,{height:0, right:0, ease: Power4.easeIn})
	.to('body',1,{backgroundColor:"#f2f2f2"},0)
	.to('.ctnr-options',1.5,{autoAlpha:0, y:-100, ease: Power3.easeInOut},'-=.5')
	.from('#photo-mid', 1.5,{height: 0, ease: Power3.easeInOut},'-=1.5')
	.from('#serv-mid', 1,{y:65},'-=.8')
	.from('#desc-mid', 1,{y:165},'-=.8')
	.from('#a-mid', 1,{autoAlpha:0, y:50},'-=.6')
	.from('#trg-mid',1,{autoAlpha:0});

$('#opt-mid').click(function (){
	tlHovermid.play('exit');
	tlHoverPmid.play()
	
})

$('#trg-mid').click(function (){
	tlHoverPmid.reverse()
	
})


	var tlHoverPdes = new TimelineMax ({paused:true})
	.set('.title-gig',{display:"none"})
	.to('#photo-efetivos',1.5,{height:0, right:0, ease: Power4.easeIn})
	.to('body',1,{backgroundColor:"#f2f2f2"},0)
	.to('.ctnr-options',1.5,{autoAlpha:0, y:-100, ease: Power3.easeInOut},'-=.5')
	.from('#photo-des', 1.5,{height: 0, ease: Power3.easeInOut},'-=1.5')
	.from('#serv-des', 1,{y:65},'-=.8')
	.from('#desc-des', 1,{y:165},'-=.8')
	.from('#a-des', 1,{autoAlpha:0, y:50},'-=.6')
	.from('#trg-des',1,{autoAlpha:0});

$('#opt-des').click(function (){
	tlHoverdes.play('exit');
	tlHoverPdes.play()
	
})

$('#trg-des').click(function (){
	tlHoverPdes.reverse()	
	
})



