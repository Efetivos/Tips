TweenMax.set('.s2,.s3, .s4, .s5',{autoAlpha:0})

if($(window).width() < 1024) {
    TweenMax.set($('.symbol-decor').not('.s1 .symbol-decor'),{autoAlpha:0})
}

// TweenMax.to('.box-photo',1.2,{delay:2, height:'0%', ease: Power4.easeInOut})
 TweenMax.staggerFrom('span',1,{x: 45},1)

 TweenMax.from('.line-triang', 1.6, {delay: 2, drawSVG:"0%", ease: Power2.easeOut})
 TweenMax.from('.symbol', 2, {delay: 2, opacity:0, yPercent: -20,  ease: Power3.easeOut})