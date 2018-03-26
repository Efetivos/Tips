//TweenMax.set('.s3, .s4, .s5',{autoAlpha:0})

if($(window).width() < 1024) {
    TweenMax.set($('.symbol-decor').not('.s1 .symbol-decor'),{autoAlpha:0})
}
var time = .6,
    timeFader = 1.4;











    
//ATRIBUE AS CLASSES AOS ELEMENTOS DE GATILHO
var trg1 = document.getElementsByClassName('trg-dot1')[0],
trg2 = document.getElementsByClassName('trg-dot2')[0],
trg3 = document.getElementsByClassName('trg-dot3')[0],
trg4 = document.getElementsByClassName('trg-dot4')[0],
trg5 = document.getElementsByClassName('trg-dot5')[0];



var nextSection, soma ;
function change(section) {

    
    soma = section.slice(-1)
    soma++
    nextSection = '.s'+soma
    function initTrans() {
    
    }
    
    //var tlTrans = new TimelineMax({ id:'tlTrans'})
    var tlTrans = new TimelineMax({paused:true, onStart: initTrans})
        .fromTo(section+' .box-photo', timeFader,{height:'100%'},{height:'0%', ease: Power3.easeInOut})
        .fromTo(section+' .holder-infos', time/1.3, {y:0, autoAlpha:1},{y:-100, autoAlpha:0, ease: Power3.easeInOut},.4)


        .staggerFromTo(nextSection+' h1',time,{cycle:{y:["-20", "20"]},opacity:0},{y:0, opacity:1},.2,'juntos')
        .fromTo(nextSection+' .line-triang', time*1.6, { drawSVG:"0%"},{drawSVG:"100%", ease: Power2.easeInOut},'juntos')
        .fromTo(nextSection+' .symbol', time*1.6, { opacity:0, yPercent: -20},{yPercent:0, opacity:1,  ease: Power3.easeInOut},'juntos')

        //.addPause()
     //   .add('exit')   
        .fromTo(nextSection+' .holder-infos',time*1.5,{yPercent:60},{yPercent:0, ease: Power4.easeInOut},'juntos2')
        .staggerFromTo(nextSection+' h1, .s2 .holder-decor',time,{yPercent:40},{yPercent:0, ease: Power2.easeIn},.06,'juntos2')
        .staggerFromTo(nextSection+' .holder-decor',time,{yPercent:40},{yPercent:0, ease: Power2.easeIn},.06,'juntos2')
        .fromTo(nextSection+' .line-up', time*1.2, { scaleX:0, transformOrigin:'left top'},{scaleX:1,  ease: Power3.easeInOut},'juntos2+='+time)
        .fromTo(nextSection+' .line-down', time*1.2, { scaleX:0, transformOrigin:'right top'},{scaleX:1,  ease: Power3.easeInOut},'juntos2+='+time)
        .fromTo(nextSection+' p', time*1.2, {opacity:0},{opacity:1,  ease: Power3.easeInOut},'juntos2+='+time*1.6)
        .fromTo(nextSection+' .link-page ', time*1.2, {opacity:0},{opacity:1,  ease: Power3.easeInOut},'juntos2+='+time*1.6)

        .add(function(){ animating = false})

        return tlTrans; //retorna Timeline
    }








    
//ATRIBUI A ANIMAÇÃO DE CADA GATINHO A UMA VARÍAVEL
    trg1.animation = change('.s1');
    trg2.animation = change('.s2');
    trg3.animation = change('.s3');
    trg4.animation = change('.s4');
    trg5.animation = change('.s5');

    var current,
    currentClicked,
    verify,
    numberSection,
    animating = false;	



//CLICK ON  MULTRIGGERS
$('.box-trigger').click(function(){    
    
    if(!animating ){ //if not animating & not clicked same trigger     
        animating = true;

        if(current) {



            //animate rest of timeline
         //   current.play('exit'); 
        }  
     
        current = this.animation; 
        this.animation.play(0); 
        
        //Active Trigger
        TweenMax.to($('.trigger').not('.'+currentClicked+' .trigger'),2,{backgroundColor:'#ccc'})
        TweenMax.to($('.'+currentClicked).find('.trigger'),2,{backgroundColor:'#a50000'})
        
    }
});

        




















        
 //       <!-- -------------------- TL INIT -------------------- -->
/* var tlSlideSection = new TimelineMax({delay:2, id:'InitTl'})
    .staggerFromTo('h1',.8,{cycle:{y:["-20", "20"]},opacity:0},{y:0, opacity:1},.2)
    .fromTo('.line-triang', 1.6, { drawSVG:"0%", yPercent:-40},{drawSVG:'100%', yPercent:0, ease: Power3.easeOut},.8)
    .from('.part1', 2.2, { opacity:0, yPercent: 40,  ease: Power3.easeOut},.8)
    .staggerFrom('.part4, .part2, .part3', 2, { opacity:0, yPercent: -20, fill:'white', ease: Power3.easeOut},.06,2.2)
    .staggerFrom('.box-trigger',.8,{cycle:{x:["-10"]}, opacity:0},.2,3.1)
    .from('.ctn-scroll-down',1.8,{yPercent:40, opacity:0},3)
    .from('.trigger-menu, .imn-logo',1.8,{yPercent:-20, opacity:0},3)
 */

//GSDevTools.create({	minimal:false });