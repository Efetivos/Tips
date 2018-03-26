TweenMax.set('.s1',{autoAlpha:0})

if($(window).width() < 1024) {
    TweenMax.set($('.symbol-decor').not('.s1 .symbol-decor'),{autoAlpha:0})
}