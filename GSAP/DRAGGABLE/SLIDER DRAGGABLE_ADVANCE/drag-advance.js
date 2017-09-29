

 	///
	var activeID = 0, // 0
		itemW = $('.holder').width(), //tamanho do Slide
		carousel_count = $('.elemento').length, // Quantidade do Items
		$holder = $('.holder'), //Segurando UL
		$elemento = $('.elemento'), // Slides
		swipeDir;
	//
  function init() {
     
    $holder.css({'width': (itemW * carousel_count) + 'px'});
    
    setupDraggable();
	}
  init();
    
	//
  function setupDraggable() { 
      
    Draggable.create($holder, {
            type:'x',
            edgeResistance: 0.65,
            dragResistance: 0.7,
            bounds:'.container',
            onDrag:updateDirections,
            onPress: press,
             cursor: 'pointer',
            onThrowUpdate:updateDirections,
            onDragEnd :function() {

              if(swipeDir == 'left') {activeID++}
              else if(swipeDir == 'right') {activeID--};
              
              navigateSlide();
            }
      });    
  };
                

  
  // navigate slide
	function navigateSlide() {
		
		if(activeID >= carousel_count-1) activeID = carousel_count-1;
		if(activeID <= 0) activeID = 0;		
						
		var xTarget = ((activeID * itemW) * -1);
		
		TweenMax.to($holder, 1, {x: xTarget, ease: Power3.easeOut, onComplete: slideDone});
	}
	
	function slideDone() {
		TweenMax.to($(activeID), .35, {scale: 1.5, backgroundColor: 'transparent',color: 0xCC0000});
    TweenMax.to($(this.target).find('.photo'),.8,{scale:1,  ease: Power4.easeOut})
    
    //
	}
	
	//
	function updateDirections() {
		swipeDir = this.getDirection("start");
    
	}

	function press() {
    TweenMax.to($(this.target).find('.photo'),.8,{scale:0.6, ease: Power4.easeOut})
	}
  

$(window).resize(init);

Draggable.get(object).vars.cursor = "e-resize";
object.style.cursor = "e-resize";