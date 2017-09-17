var tl = new TimelineMax({repeat:-1,yoyo:true})
	.to('#photo1',1,{zIndex:1})
	.to('#photo2',1,{zIndex:1})
	.to('#photo3',1,{zIndex:1})
	.to('#photo3',1,{zIndex:0})
	.to('#photo2',1,{zIndex:0})

	;