//TweenMax.set('.s3, .s4, .s5',{autoAlpha:0})

if($(window).width() < 1024) {
    TweenMax.set($('.symbol-decor').not('.s1 .symbol-decor'),{autoAlpha:0})
}
var time = .6,
    timeFader = 1.4;

    //var tlTrans = new TimelineMax({ id:'tlTrans'})
    var tlTrans = new TimelineMax({paused:true, id:'tlTrans'})
        .fromTo('.s1 .box-photo', timeFader,{height:'100%'},{height:'0%', ease: Power3.easeInOut})
        .fromTo('.s1 .holder-infos', time/1.3, {y:0, autoAlpha:1},{y:-100, autoAlpha:0, ease: Power3.easeInOut},.4)


        .staggerFromTo('.s2 h1',time,{cycle:{y:["-20", "20"]},opacity:0},{y:0, opacity:1},.2,'juntos')
        .fromTo('.s2 .line-triang', time*1.6, { drawSVG:"0%"},{drawSVG:"100%", ease: Power2.easeInOut},'juntos')
        .fromTo('.s2 .symbol', time*1.6, { opacity:0, yPercent: -20},{yPercent:0, opacity:1,  ease: Power3.easeInOut},'juntos')

        .addPause()   
        .fromTo('.s2 .holder-infos',time*1.5,{yPercent:60},{yPercent:0, ease: Power4.easeInOut},'juntos2')
        .staggerFromTo('.s2 h1, .s2 .holder-decor',time,{yPercent:40},{yPercent:0, ease: Power2.easeIn},.06,'juntos2')
        .staggerFromTo('.s2 .holder-decor',time,{yPercent:40},{yPercent:0, ease: Power2.easeIn},.06,'juntos2')
        .fromTo('.s2 .line-up', time*1.2, { scaleX:0, transformOrigin:'left top'},{scaleX:1,  ease: Power3.easeInOut},'juntos2+='+time)
        .fromTo('.s2 .line-down', time*1.2, { scaleX:0, transformOrigin:'right top'},{scaleX:1,  ease: Power3.easeInOut},'juntos2+='+time)
        .fromTo('.s2 p', time*1.2, {opacity:0},{opacity:1,  ease: Power3.easeInOut},'juntos2+='+time*1.6)
        .fromTo('.s2 .link-page ', time*1.2, {opacity:0},{opacity:1,  ease: Power3.easeInOut},'juntos2+='+time*1.6)
        

        .addPause()  

        
        $('.ctn-scroll-down').click(function(){
            tlTrans.play()
        });
        
        
        
        



        
 //       <!-- -------------------- TL INIT -------------------- -->
/* var tlSlideSection = new TimelineMax({delay:2, id:'InitTl'})
    .staggerFrom('h1',.8,{cycle:{y:["-20", "20"]},opacity:0},.2)
    .from('.line-triang', 1.6, { drawSVG:"0%", yPercent:-40,  ease: Power3.easeOut},.8)
    .from('.part1', 2.2, { opacity:0, yPercent: 40,  ease: Power3.easeOut},.8)
    .staggerFrom('.part4, .part2, .part3', 2, { opacity:0, yPercent: -20, fill:'white', ease: Power3.easeOut},.06,2.2)
    .staggerFrom('.box-trigger',.8,{cycle:{x:["-10"]}, opacity:0},.2,3.1)
    .from('.ctn-scroll-down',1.8,{yPercent:40, opacity:0},3)
    .from('.trigger-menu, .imn-logo',1.8,{yPercent:-20, opacity:0},3) */


//GSDevTools.create({	minimal:false });