TweenMax.set('.s2,.s3, .s4, .s5',{autoAlpha:0})

if($(window).width() < 1024) {
    TweenMax.set($('.symbol-decor').not('.s1 .symbol-decor'),{autoAlpha:0})
}


var tlSlideSection = new TimelineMax({delay:2, id:'InitTl'})
    .staggerFrom('h1',.8,{cycle:{y:["-20", "20"]},opacity:0},.2)
    .from('.line-triang', 1.6, { drawSVG:"0%", yPercent:-40,  ease: Power3.easeOut},.8)
    .from('.part1', 2.2, { opacity:0, yPercent: 40,  ease: Power3.easeOut},.8)
    .staggerFrom('.part4, .part2, .part3', 2, { opacity:0, yPercent: -20, fill:'white', ease: Power3.easeOut},.06,2.2)
    .staggerFrom('.box-trigger',.8,{cycle:{x:["-10"]}, opacity:0},.2,3.1)
    .from('.ctn-scroll-down',1.8,{yPercent:40, opacity:0},3)



//GSDevTools.create({	minimal:false });