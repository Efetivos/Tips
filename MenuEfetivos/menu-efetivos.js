if ($( window ).width() < 960) {


	var tlMenuEfetMob = new TimelineMax()
		
		.from('.ctn-menu',1.5,{width:0, ease: Power3.easeInOut})
		.staggerFrom('.link',1,{autoAlpha:0, x:-300, ease: Power2.easeOut},0.1,'-=1.3')
		.staggerFrom('.menu-icons',1,{autoAlpha:0, y:100, ease: Power2.easeOut},0.1,'-=0.9')
	
    .reverse();
;   

$(".trg-menu").click(function() {

  tlMenuEfetMob.reversed(!tlMenuEfetMob.reversed());
});	
	
} //fecha mobile



else {
	
	var tlMenuEfetMob = new TimelineMax()
		
		.from('.ctn-menu',1.5,{width:0, ease: Power3.easeInOut})
		.staggerFrom('.link, span',1,{autoAlpha:0, y:800, ease: Power2.easeOut},0.05,'-=1.3')
		.staggerFrom('.menu-icons',1,{autoAlpha:0, y:100, ease: Power2.easeOut},0.1,'-=0.9')
	
    .reverse();
;   

$(".trg-menu").click(function() {

  tlMenuEfetMob.reversed(!tlMenuEfetMob.reversed());
});	
	
} //Fecha ELSE


