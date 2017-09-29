if ($( window ).width() < 960) {


	var tlMenuEfetMob = new TimelineMax()
		
		.from('.ctn-menu',1.5,{width:0, scale:1.1, x:-49, skewX: -9 , ease: Power2.easeInOut})
		.staggerFrom('.link',1,{autoAlpha:0, x:-300, ease: Power2.easeOut},0.1,'-=1.3')
		.staggerFrom('.menu-icons',1,{autoAlpha:0, y:100, ease: Power2.easeOut},0.1,'-=0.9')
	
    .reverse();
;   

$(".box-trigger").click(function() {

  tlMenuEfetMob.reversed(!tlMenuEfetMob.reversed());
});	
	
} //fecha mobile



else {

	
	
	
	$('.box-link').html(function(){
			
	
		var tlHoverBoxLink = new TimelineMax({paused:true})
			.to(this, 1,{backgroundColor:'#292929'})
			.to($(this).find('a'), 1,{color:'#fff'},'-=1')
	
	$(this).hover(	
		function(){			
			tlHoverBoxLink.play();
		}, 
		
		function(){
			tlHoverBoxLink.reverse();
		})//Close Hover
	
	})//CloseBoxLinkHtml
	

	
	var tlMenuEfetMob = new TimelineMax()
		
		.from('.ctn-menu, .box-link',1.5,{width:0, ease: Power3.easeInOut})
		.staggerFrom('.link, span',1,{autoAlpha:0, y:800, ease: Power2.easeOut},0.05,'-=0.6')
		.staggerFrom('.menu-icons',1,{autoAlpha:0, y:100, ease: Power2.easeOut},0.1,'-=0.9')
	
    .reverse();
;   

$(".box-trigger").click(function() {

  tlMenuEfetMob.reversed(!tlMenuEfetMob.reversed());
});	
	
} //Fecha ELSE

var tlTriggerMenu = new TimelineMax({paused:true})
		  .from('.up,.down',.5,{opacity:0.5})
		  .to('.up,.down',.5,{scale:0.5})
		  .to('.up',.5,{y:4.6, ease: Power3.easeIn},0)
		  .to('.down',.5,{y:-4.6, ease: Power3.easeIn},0)
		  .to('.up',.5,{rotation: 45, ease: Power3.easeIn})
		  .to('.down',.5,{rotation: -45, ease: Power3.easeIn},'-=.5')
		  .reverse();
		
		$(".box-trigger").click(function() {
		
		  tlTriggerMenu .reversed(!tlTriggerMenu .reversed());
		});	
		

