//TweenMax.set('.s3, .s4, .s5',{autoAlpha:0})

if($(window).width() < 1024) {
    TweenMax.set($('.symbol-decor').not('.s1 .symbol-decor'),{autoAlpha:0})
}
var time = .6,
    timeFader = 1.4,
    pageIndic = $('.page-indicator');


    function changeInInit (section) {
        let myVar = section.slice(-1),
            minus = myVar-1
            last = '.trg-dot'+minus
        TweenMax.staggerFromTo(section+' .numb', .8 , {cycle:{y:["20", "-20"]},opacity:0},{y:0, opacity:1},.2)
        TweenMax.fromTo(section+' .line-trg',.6,{scaleX:0, transformOrigin:'left'},{scaleX:1})
        TweenMax.fromTo(section+' .trigger',.3,{opacity:1},{opacity:0})

        
        TweenMax.staggerFromTo(last+' .numb', .8 ,{y:0, opacity:1}, {cycle:{y:["20", "-20"]},opacity:0},.2)
        TweenMax.fromTo(last+' .line-trg',.6,{scaleX:1},{scaleX:0, transformOrigin:'left'})
        TweenMax.fromTo(last+' .trigger',1.2,{opacity:0},{opacity:1})
        
    }


    function changeInOut (sectionB) {
        let myVar = sectionB.slice(-1);
            myVar++
            let last = '.trg-dot'+myVar;

            console.log(sectionB)
            console.log(myVar)
            console.log(last)
        TweenMax.staggerFromTo(sectionB+' .numb', .8 , {cycle:{y:["20", "-20"]},opacity:0},{y:0, opacity:1},.2)
        TweenMax.fromTo(sectionB+' .line-trg',.6,{scaleX:0, transformOrigin:'left'},{scaleX:1})
        TweenMax.fromTo(sectionB+' .trigger',.3,{opacity:1},{opacity:0})

       // alert(lastPlus)
        TweenMax.staggerFromTo(last+' .numb', .8 ,{y:0, opacity:1}, {cycle:{y:["20", "-20"]},opacity:0},.2)
        TweenMax.fromTo(last+' .line-trg',.6,{scaleX:1},{scaleX:0, transformOrigin:'left'})
        TweenMax.fromTo(last+' .trigger',1.2,{opacity:0},{opacity:1})
        
    }


    //var tlTrans = new TimelineMax({ id:'tlTrans'})
    var tlTrans = new TimelineMax({paused:true, id:'tlTrans'})
        .to('.s1 .box-photo', timeFader,{height:'0%', ease: Power3.easeInOut})
        .to('.s1 .holder-infos', time/1.3,{y:-100, autoAlpha:0, ease: Power3.easeInOut},.4)

        // in s2
        .add(function(){ pageIndic.text('SOBRE');})
        .staggerFrom('.s2 h1',time,{cycle:{y:["-20", "20"]},opacity:0, onStart:function(){  changeInInit('.trg-dot1');},  onReverseComplete: function(){ changeInOut('.trg-dot1');} },.2,'juntos')
        .from('.s2 .line-triang', time*1.6, { drawSVG:"0%", ease: Power2.easeInOut},'juntos')
        .from('.s2 .symbol', time*1.6, { opacity:0, yPercent: -20, ease: Power3.easeInOut},'juntos')
        .add('section1')

        .addPause()   /* roll up s2*/         
        //.to('.s2 .photo', time*1.6, { backgroundPosition:'bottom',ease: Power3.easeInOut},'juntos2')
        .from('.s2 .holder-infos',time*1.5,{yPercent:60, ease: Power4.easeInOut},'juntos2')
        .staggerFrom('.s2 h1',time,{yPercent:40, ease: Power2.easeInOut},.06,'juntos2')
        .staggerFrom('.s2 .holder-decor',time,{yPercent:40, ease: Power2.easeInOut},.06,'juntos2')
        .from('.s2 .line-up', time*1.2, { scaleX:0, transformOrigin:'left top',  ease: Power3.easeInOut},'juntos2+='+time)
        .from('.s2 .line-down', time*1.2, { scaleX:0, transformOrigin:'right top', ease: Power3.easeInOut},'juntos2+='+time)
        .from('.s2 p', time*2, {opacity:0},'juntos2+='+time*1.6)
        .from('.s2 .link-page ', time*1.2, {opacity:0 },'juntos2+='+time*1.6)
        

        .addPause()
        //out s2
        .to('.s2 .box-photo', timeFader,{height:'0%', ease: Power3.easeInOut },'out2')
        .to('.s2 .holder-infos', time/1.3,{y:-100, autoAlpha:0, ease: Power3.easeInOut},'out2+=.2')

        // in s3
        .add(function(){ pageIndic.text('QUEM SOMOS');}) 
        .staggerFrom('.s3 h1',time,{cycle:{y:["-20", "20"]},opacity:0, onStart:function(){  changeInInit('.trg-dot2');},  onReverseComplete: function(){ changeInOut('.trg-dot1');} },.2,'juntos3')
        .from('.s3 .line-triang', time*1.6, { drawSVG:"0%", ease: Power2.easeInOut},'juntos3')
        .from('.s3 .symbol', time*1.6, { opacity:0, yPercent: -20, ease: Power3.easeInOut},'juntos3')
        .add('section2')

        .addPause()   // roll up s3
        //.to('.s3 .photo', time*1.6, { backgroundPosition:'bottom',ease: Power3.easeInOut},'juntos4')
        .from('.s3 .holder-infos',time*1.5,{yPercent:60, ease: Power4.easeInOut},'juntos4')
        .staggerFrom('.s3 h1',time,{yPercent:40, ease: Power2.easeInOut},.06,'juntos4')
        .staggerFrom('.s3 .holder-decor',time,{yPercent:40, ease: Power2.easeInOut},.06,'juntos4')
        .from('.s3 .line-up', time*1.2, { scaleX:0, transformOrigin:'left top',  ease: Power3.easeInOut},'juntos4+='+time)
        .from('.s3 .line-down', time*1.2, { scaleX:0, transformOrigin:'right top', ease: Power3.easeInOut},'juntos4+='+time)
        .from('.s3 p', time*2, {opacity:0},'juntos4+='+time*1.6)
        .from('.s3 .link-page ', time*1.2, {opacity:0},'juntos4+='+time*1.6)
        



        .addPause()
        //out s3
        .to('.s3 .box-photo', timeFader,{height:'0%', ease: Power3.easeInOut},'out3')
        .to('.s3 .holder-infos', time/1.3,{y:-100, autoAlpha:0, ease: Power3.easeInOut},'out3+=.2')

        // in s4
        .add(function(){ pageIndic.text('ESPECIALIDADES') ; })
        .staggerFrom('.s4 h1',time,{cycle:{y:["-20", "20"]},opacity:0, onStart:function(){  changeInInit('.trg-dot3');},  onReverseComplete: function(){ changeInOut('.trg-dot2');} },.2,'juntos5')
        .from('.s4 .line-triang', time*1.6, { drawSVG:"0%", ease: Power2.easeInOut},'juntos5')
        .from('.s4 .symbol', time*1.6, { opacity:0, yPercent: -20, ease: Power3.easeInOut},'juntos5')
        .add('section3')

        .addPause()   // roll up s4        
        //.to('.s4 .photo', time*1.6, { backgroundPosition:'bottom',ease: Power3.easeInOut},'juntos6')
        .from('.s4 .holder-infos',time*1.5,{yPercent:60, ease: Power4.easeInOut},'juntos6')
        .staggerFrom('.s4 h1',time,{yPercent:40, ease: Power2.easeInOut},.06,'juntos6')
        .staggerFrom('.s4 .holder-decor',time,{yPercent:40, ease: Power2.easeInOut},.06,'juntos6')
        .from('.s4 .line-up', time*1.2, { scaleX:0, transformOrigin:'left top',  ease: Power3.easeInOut},'juntos6+='+time)
        .from('.s4 .line-down', time*1.2, { scaleX:0, transformOrigin:'right top', ease: Power3.easeInOut},'juntos6+='+time)
        .from('.s4 p', time*2, {opacity:0},'juntos6+='+time*1.6)
        .from('.s4 .link-page ', time*1.2, {opacity:0},'juntos6+='+time*1.6)
        



        .addPause()
        //out s4
        .to('.s4 .box-photo', timeFader,{height:'0%', ease: Power3.easeInOut},'out4')
        .to('.s4 .holder-infos', time/1.3,{y:-100, autoAlpha:0, ease: Power3.easeInOut},'out4+=.2')

        // in s5
        .add(function(){ pageIndic.text('NOSSO CONTATO');})
        .staggerFrom('.s5 h1',time,{cycle:{y:["-20", "20"]},opacity:0, onStart:function(){  changeInInit('.trg-dot4');},  onReverseComplete: function(){ changeInOut('.trg-dot3');}  },.2,'juntos7')
        .from('.s5 .line-triang', time*1.6, { drawSVG:"0%", ease: Power2.easeInOut},'juntos7')
        .from('.s5 .symbol', time*1.6, { opacity:0, yPercent: -20, ease: Power3.easeInOut},'juntos7')

        .addPause()   // roll up s5
        //.to('.s5 .photo', time*1.6, { backgroundPosition:'bottom',ease: Power3.easeInOut},'juntos8')
        .from('.s5 .holder-infos',time*1.5,{yPercent:60, ease: Power4.easeInOut},'juntos8')
        .staggerFrom('.s5 h1',time,{yPercent:40, ease: Power2.easeInOut},.06,'juntos8')
        .staggerFrom('.s5 .holder-decor',time,{yPercent:40, ease: Power2.easeInOut},.06,'juntos8')
        .from('.s5 .line-up', time*1.2, { scaleX:0, transformOrigin:'left top',  ease: Power3.easeInOut},'juntos8+='+time)
        .from('.s5 .line-down', time*1.2, { scaleX:0, transformOrigin:'right top', ease: Power3.easeInOut},'juntos8+='+time)
        .from('.s5 p', time*2, {opacity:0},'juntos8+='+time*1.6)
        .from('.s5 .link-page ', time*1.2, {opacity:0},'juntos8+='+time*1.6)
        .add('section4')
        

        
        $('.ctn-scroll-down').click(function(){
            tlTrans.play()
        });
        
        
        
        
var tlIndicatorTrg = new TimelineMax({paused:true})
    .staggerFrom('.numb', .8 , {cycle:{y:["20", "-20"]},opacity:0},.2)
    .from('.line-trg',.6,{scaleX:0, transformOrigin:'left'})







 //       <!-- -------------------- TL INIT -------------------- -->
 var tlSlideSection = new TimelineMax({delay:2, id:'InitTl'})
    .staggerFrom('.s1 h1',.8,{cycle:{y:["-20", "20"]},opacity:0},.2)
    .from('.s1 .line-triang', 1.6, { drawSVG:"0%", yPercent:-40,  ease: Power3.easeOut},.8)
    .from('.s1 .part1', 2.2, { opacity:0, yPercent: 40,  ease: Power3.easeOut},.8)
    .staggerFrom('.part4, .part2, .part3', 2, { opacity:0, yPercent: -20, fill:'white', ease: Power3.easeOut},.06,2.2)
    .staggerFrom('.box-trigger',.8,{cycle:{x:["-10"]}, opacity:0},.2,3.1)
    .from('.ctn-scroll-down',1.8,{yPercent:40, opacity:0},3)
    .from('.trigger-menu, .imn-logo',1.8,{yPercent:-20, opacity:0},3)
 



    $('.trg-dot1').click(function(){
        tlTrans.tweenTo('section1').duration(1.2)
    });


    $('.trg-dot2').click(function(){
        tlTrans.tweenTo('section2').duration(1.2)
    });


    $('.trg-dot3').click(function(){
        tlTrans.tweenTo('section3').duration(1.2)
    });


    $('.trg-dot4').click(function(){
        tlTrans.tweenTo('section4').duration(1.2)
    });


//       <!-- -------------------- TL INIT -------------------- -->
    $(window).bind('mousewheel DOMMouseScroll', function(event){
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            tlTrans.reverse()
        }
        else {
            tlTrans.reverse()
        }
    });


    document.addEventListener('touchstart', handleTouchStart, false);    
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;  
var yDown = null;                                                        

function handleTouchStart(evt) {                                       
    xDown = evt.touches[0].clientX;  
    yDown = evt.touches[0].clientY; 
};                                                


function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;   
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            tlTrans.play();
        } else {
            tlTrans.reverse();
        }                       
    } else {
        if ( yDiff > 0 ) {
            tlTrans.play();
        } else { 
            tlTrans.reverse();
        }    
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};


//GSDevTools.create({	minimal:false });