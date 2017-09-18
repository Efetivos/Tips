var tlBtnbarbara = new TimelineMax({paused:true}).from('#photo1',1,{width:0})

$('#btn-barbara').hover(function(){
		TweenMax.set('#photo1',{zIndex:1})
		tlBtnbarbara.play();
	},function(){
		TweenMax.set('#photo1',{zIndex:'auto'})
		tlBtnbarbara.reverse();
	});

var tlBtndanny = new TimelineMax({paused:true}).from('#photo2',1,{width:0})

$('#btn-danny').hover(function(){
		TweenMax.set('#photo2',{zIndex:1})
		tlBtndanny.play();
	},function(){
		TweenMax.set('#photo2',{zIndex:'auto'})
		tlBtndanny.reverse();
	});

var tlBtndeborah = new TimelineMax({paused:true}).from('#photo3',1,{width:0})

$('#btn-deborah').hover(function(){
		TweenMax.set('#photo3',{zIndex:1})
		tlBtndeborah.play();
	},function(){
		TweenMax.set('#photo3',{zIndex:'auto'})
		tlBtndeborah.reverse();
	});

var tlBtnlivia = new TimelineMax({paused:true}).from('#photo4',1,{width:0})

$('#btn-livia').hover(function(){
		TweenMax.set('#photo4',{zIndex:1})
		tlBtnlivia.play();
	},function(){
		TweenMax.set('#photo4',{zIndex:'auto'})
		tlBtnlivia.reverse();
	});

var tlBtnnicole = new TimelineMax({paused:true}).from('#photo5',1,{width:0})

$('#btn-nicole').hover(function(){
		TweenMax.set('#photo5',{zIndex:1})
		tlBtnnicole.play();
	},function(){
		TweenMax.set('#photo5',{zIndex:'auto'})
		tlBtnnicole.reverse();
	});


var tlBtnpenelope = new TimelineMax({paused:true}).from('#photo6',1,{width:0})

$('#btn-penelope').hover(function(){
		TweenMax.set('#photo6',{zIndex:1})
		tlBtnpenelope.play();
	},function(){
		TweenMax.set('#photo6',{zIndex:'auto'})
		tlBtnpenelope.reverse();
	});


var tlBtnsuellen = new TimelineMax({paused:true}).from('#photo7',1,{width:0})

$('#btn-suellen').hover(function(){
		TweenMax.set('#photo7',{zIndex:1})
		tlBtnsuellen.play();
	},function(){
		TweenMax.set('#photo7',{zIndex:'auto'})
		tlBtnsuellen.reverse();
	});