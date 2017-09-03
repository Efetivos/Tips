
var $target = $('img'),
		animationClass = 'animate',
		offset = $(window).height() * 3/4;

function animeScroll() {
	var documentTop = $(document).scrollTop();
	
	$target.each(function(){
		var itemTop = $(this).offset().top;
		if (documentTop > itemTop - offset) {
          
			tween = TweenMax.to(this,0.8, {width:560});
          

          
		} else {
			$(this).css('width','0');
		}
	});
}

animeScroll();

$(document).scroll(function(){
	animeScroll();
});

