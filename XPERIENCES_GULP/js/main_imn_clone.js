TweenMax.set('.s2',{autoAlpha:0})

if($(window).width() < 1024) {
    TweenMax.set($('.symbol-decor').not('.s1 .symbol-decor'),{autoAlpha:0})
}

// TweenMax.to('.box-photo',1.2,{delay:2, height:'0%', ease: Power4.easeInOut})
// TweenMax.staggerTo('span',1,{opacity:0},1)