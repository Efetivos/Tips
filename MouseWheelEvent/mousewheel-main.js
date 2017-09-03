var tl = new TimelineMax({paused:true}) // , onComplete:function() {this.restart()} => Para Loop
	.to("#box",1,{xPercent:100, ease: Power3.easeInOut}).addPause()
	.to("#box",1,{yPercent:200, ease: Power3.easeInOut}).addPause()
	.to("#box",1,{xPercent:-100, ease: Power3.easeInOut}).addPause()
	.to("#box",1,{yPercent:-50, ease: Power3.easeInOut}).addPause()
	

//========= Mouse Wheel Detect
$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
        console.log('Scroll up');
		tl.reverse();
		
    }
    else {
        console.log('Scroll down');
		tl.play();
    }
});



//========= Keyboard Detect
$(document).on("keyup", function(e){
							
	if(e.keyCode == 37){
					 
               // left arrow
               console.log("left arrow");
					
	} else if(e.keyCode == 38){ 
		
               // up arrow
               console.log("up arrow");
		tl.reverse();
					
	} else if(e.keyCode == 39){ 

	       // right arrow
               console.log("right arrow");			
					
	} else if(e.keyCode == 40){
		
               // down arrow
               console.log("down arrow");
			tl.play();
					
	}
				
	return false;
});