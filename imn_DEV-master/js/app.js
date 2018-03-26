/////////////////////// SCROLL DOWN

$('.js-scroll-sobre').on('click', function(){
	$('html, body').animate({
		scrollTop: $(".scroll-sobre").offset().top -100
	}, 1000)  
})

$('.js-scroll-galeria').on('click', function(){
	$('html, body').animate({
		scrollTop: $(".scroll-galeria").offset().top -1 
	}, 1000)  
})


$('.js-scroll-profissionais').on('click', function(){
	$('html, body').animate({
		scrollTop: $(".scroll-profissionais").offset().top -1 
	}, 1000)  
})

/////////////////////// SCROLL DOWN

/////////////////////// PROFISSIONAIS

function prof(jspf) {
	var tlPf1 = new TimelineMax()
	.to('.pf-ctn-inner'+jspf, 1.5, {ease: Expo.easeInOut, top:"0vh", autoAlpha: 1})
	.to('.pf-foto-inner', .5, {scale:1.02},"-=.3")
	$('.pf-ctn-fecha').on('click',function() {
		tlPf1.reverse();
	});         
}

$('.p-ctn-prof').click(function(){
	var elClicked = $(this).attr('class').split(' ')[1];
	prof('.'+elClicked);
})

TweenMax.set('.pf-hover-p', {y:10, opacity:0});

function ttt(hover) {
	TweenMax.to( '.pf-hover-1'+hover,.2, {opacity:.8})
	TweenMax.to( '.pf-hover-p' , .8, {y:0, opacity:1})
}

function hhh(hover) {
	TweenMax.to( '.pf-hover-p',.2,{y:10,opacity:0})
	TweenMax.to( '.pf-hover-1'+hover ,.8,{opacity:0})
}

$( ".pf-hover-1").mouseenter(function() {
	var Pfhover = $(this).attr('class').split(' ')[1];
	ttt('.'+Pfhover);
})

$( ".pf-hover-1").mouseleave(function() {
	var Pfhover = $(this).attr('class').split(' ')[1];
	hhh('.'+Pfhover);
})

///////////////////////// PROFISSIONAIS 

///////////////////////// GALERIA 

var count = 0
function galeria(par1) {
	var tlgr1 = new TimelineMax()
	.to('.glr-ctn-foto', .6, { width:"20vw"})
	.to('.glr-geral', 1, {ease: Expo.easeInOut, bottom: count+ "00vh"})
	.to('.glr-ctn-foto', .6, { width:"70vw"})
}

$('.btn1').click(function(){
	galeria('.glr-nav.glr-rgt-30',count++);
	prof2('.glr-nav.glr-rgt-30',count);
})

$('.btn2').click(function(){
	prof('.glr-nav.glr-rgt-30',count--);
	prof2('.glr-nav.glr-rgt-30', count);
})

TweenMax.set('.00vh', {scale: 1.3,backgroundColor: "#000"});
function clickTri(prmt1,prmt2) {
	var tltg1 = new TimelineMax()
	.to('.glr-trigger-cir', .3, { scale: 1, backgroundColor: "transparent"})
	.to('.glr-ctn-foto', .3, { width:"50vw"})
	.to('.glr-geral', 1.2, {ease: Expo.easeInOut, bottom:"-"+prmt2})
	.to('.glr-ctn-foto', .6, {ease: Expo.easeInOut, width:"70vw"})
	.to('.glr-trigger-cir'+prmt1, .6, {scale: 1.3, backgroundColor: "#000"},"-=.8")	 
}

$('.glr-trigger-cir').click(function(){
	var clickTrigger = $(this).attr('class').split(' ')[1];
	clickTri('.'+clickTrigger,clickTrigger);

})

function glrinner(fotovh,fotovw) {
	var tlgrinner1 = new TimelineMax()
	.to('.glr-inner-geral' , 0, {ease: Expo.easeInOut, left: "-"+fotovw})
	.to('.glr-inner', 1.5, {ease: Expo.easeInOut, top:"0vh", autoAlpha: 1})
	

	$('.pf-ctn-fecha').on('click',function() {
		tlgrinner1.reverse();
	});         
}

$('.glr-foto').click(function(){
	var clickfoto = $(this).attr('class').split(' ')[1];
	glrinner('.'+clickfoto, clickfoto);
})

///////////////////////// GALERIA


///////////////////////// ARROW ANIMAÇÃO ABRE

var tlarrow = new TimelineMax({repeat:100})
tlarrow.fromTo('.arrow-down' , 1, {ease: Expo.easeInOut, y:-6}, {ease: Expo.easeInOut, y:4})
.to('.arrow-down' , .3, {y:-6}) 

$( ".btnSaiba" ).mouseenter(function() {
  var tlsaiba = new TimelineMax()
	.to('.js-h-rgt' , 0.4, {ease: Expo.easeInOut, x: 40, opacity:0})
	.to('.js-h-rgt' , 0, {x:-10})
	.to('.js-h-rgt' , 0.4, {x: 0, opacity:0.8})
});

$( ".navegador" ).mouseenter(function() {
  var tlnav = new TimelineMax()
	.to('.mg-lf-1' , 0.4, {ease: Expo.easeInOut, y: 40, opacity:0})
	.to('.mg-lf-1' , 0, {y:-40})
	.to('.mg-lf-1' , 0.4, {y: 0, opacity:0.8})
});

///////////////////////// ARROW ANIMAÇÃO FECHA

///////////////////////// HOME ABRE
var time = 1, timeLinha = 1, timeMain =.9;

var tl1 = new TimelineLite();
tl1
.addPause()
.to(".bordaT1", 0.4, { height:"100%"},'juntoBorda1')
.to(".bordaR1", 0.4, { width:"100%"},'juntoBorda1')
.to(".bordaB1", 0.4, { height:"100%"},'juntoBorda1')
.to(".bordaL1", 0.4, { width:"100%"},'juntoBorda1')
.to(".lt1", 0.5, { width:"0%"},"-=0.5")
.to(".tc1", 0.5, { scale:1, backgroundColor:"transparent"},"-=0.5")
.to(".ctnCentral", .8, {y:"300px", opacity:0},"-=0.1")
.to(".main",timeMain,{ease: Expo.easeInOut, top:"-100vh"})
.to(".lt2", 0.5, { width:"100%"},"-=1")
.to(".tc2", 0.5, { scale:1.7, backgroundColor:"#fff"},"-=1")
.to(".bordaT1", 0.5, { height:"0%"},'juntoBorda2')
.to(".bordaR1", 0.5, { width:"0%"},'juntoBorda2')
.to(".bordaB1", 0.5, { height:"0%"},'juntoBorda2')
.to(".bordaL1", 0.5, { width:"0%"},'juntoBorda2')
.to(".ctnCentral", time, {ease: Expo.easeInOut, y:"250px", opacity:1},"-=1")
.from(".foto2 .trianguloDesk", 1.5, {ease: Expo.easeInOut, scale:2, opacity:0},"-=1")
.from(".foto2 .boxNumeral", 1.5, {ease: Expo.easeInOut, x:"100px", opacity:0},"-=0.7")
/////slider 2
.addPause()
.to(".foto2", 1, {ease: Expo.easeInOut, backgroundPosition: "bottom" })
.to(".ctnCentral", 1, {ease: Expo.easeInOut, y:"0px", opacity:1},"-=1")
.from(".foto2 .bordaHome", timeLinha,{width:0, autoAlpha:"0"},"-=0.1")
.from(".foto2 .boxDescri p", time,{autoAlpha:"0"},"-=0.5")
.from(".foto2 .btnSaiba", 1.1,{autoAlpha:"0"},"-=0.3")
.addPause()
.to(".bordaT1", 0.4, { height:"100%"})
.to(".bordaR1", 0.4, { width:"100%"},"-=0.4")
.to(".bordaB1", 0.4, { height:"100%"},"-=0.4")
.to(".bordaL1", 0.4, { width:"100%"},"-=0.4")
.to(".lt2", 0.5, { width:"0%"},"-=0.5")
.to(".tc2", 0.5, { scale:1, backgroundColor:"transparent"},"-=0.5")
.to(".ctnCentral", .8, {y:"300px", opacity:0},"-=0.1")
.to(".main",timeMain,{ease: Expo.easeInOut, top:"-200vh"})
.to(".lt3", 0.5, { width:"100%"},"-=1")
.to(".tc3", 0.5, { scale:1.7, backgroundColor:"#fff"},"-=1")
.to(".bordaT1", 0.5, { height:"0%"})
.to(".bordaR1", 0.5, { width:"0%"},"-=0.5")
.to(".bordaB1", 0.5, { height:"0%"},"-=0.5")
.to(".bordaL1", 0.5, { width:"0%"},"-=0.5")
.to(".ctnCentral", time, {ease: Expo.easeInOut, y:"250px", opacity:1},"-=1")
.from(".foto3 .trianguloDesk", 1.5, {ease: Expo.easeInOut, scale:2, opacity:0},"-=1")
.from(".foto3 .boxNumeral", 1.5, {ease: Expo.easeInOut, x:"100px", opacity:0},"-=0.7")
.addPause()
.to(".foto3", 1, {ease: Expo.easeInOut, backgroundPosition: "bottom" })
.to(".ctnCentral", 1, {ease: Expo.easeInOut, y:"0px", opacity:1},"-=1")
.from(".foto3 .bordaHome", timeLinha,{width:0, autoAlpha:"0"},"-=0.1")
.from(".foto3 .boxDescri p", time,{autoAlpha:"0"},"-=0.5")
.from(".foto3 .btnSaiba", 1.1,{autoAlpha:"0"},"-=0.3")


////slider 3
.addPause()
.to(".bordaT1", 0.4, { height:"100%"})
.to(".bordaR1", 0.4, { width:"100%"},"-=0.4")
.to(".bordaB1", 0.4, { height:"100%"},"-=0.4")
.to(".bordaL1", 0.4, { width:"100%"},"-=0.4")
.to(".lt3", 0.5, { width:"0%"},"-=0.5")
.to(".tc3", 0.5, { scale:1, backgroundColor:"transparent"},"-=0.5")
.to(".ctnCentral", .8, {y:"300px", opacity:0},"-=0.1")
.to(".main",timeMain,{ease: Expo.easeInOut, top:"-300vh"})
.to(".lt4", 0.5, { width:"100%"},"-=1")
.to(".tc4", 0.5, { scale:1.7, backgroundColor:"#fff"},"-=1")
.to(".bordaT1", 0.5, { height:"0%"})
.to(".bordaR1", 0.5, { width:"0%"},"-=0.5")
.to(".bordaB1", 0.5, { height:"0%"},"-=0.5")
.to(".bordaL1", 0.5, { width:"0%"},"-=0.5")
.to(".ctnCentral", time, {ease: Expo.easeInOut, y:"250px", opacity:1},"-=1")
.from(".foto4 .trianguloDesk", 1.5, {ease: Expo.easeInOut, scale:2, opacity:0},"-=1")
.from(".foto4 .boxNumeral", 1.5, {ease: Expo.easeInOut, x:"100px", opacity:0},"-=0.7")
.addPause()
.to(".foto4", 1, {ease: Expo.easeInOut, backgroundPosition: "bottom" })
.to(".ctnCentral", 1, {ease: Expo.easeInOut, y:"0px", opacity:1},"-=1")
.from(".foto4 .bordaHome", timeLinha,{width:0, autoAlpha:"0"},"-=0.1")
.from(".foto4 .boxDescri p", time,{autoAlpha:"0"},"-=0.5")
.from(".foto4 .btnSaiba", 1.1,{autoAlpha:"0"},"-=0.3")



/////slider 4
.addPause()
.to(".bordaT1", 0.4, { height:"100%"})
.to(".bordaR1", 0.4, { width:"100%"},"-=0.4")
.to(".bordaB1", 0.4, { height:"100%"},"-=0.4")
.to(".bordaL1", 0.4, { width:"100%"},"-=0.4")
.to(".lt4", 0.5, { width:"0%"},"-=0.5")
.to(".tc4", 0.5, { scale:1, backgroundColor:"transparent"},"-=0.5") 
.to(".ctnCentral", .8, {y:"300px", opacity:0},"-=0.1")
.to(".main",timeMain,{ease: Expo.easeInOut, top:"-400vh"})
.to(".lt5", 0.5, { width:"100%"},"-=1")
.to(".tc5", 0.5, { scale:1.7, backgroundColor:"#fff"},"-=1")
.to(".bordaT1", 0.5, { height:"0%"})
.to(".bordaR1", 0.5, { width:"0%"},"-=0.5")
.to(".bordaB1", 0.5, { height:"0%"},"-=0.5")
.to(".bordaL1", 0.5, { width:"0%"},"-=0.5")
.to(".ctnCentral", time, {ease: Expo.easeInOut, y:"250px", opacity:1},"-=1")
.from(".foto5 .trianguloDesk", 1.5, {ease: Expo.easeInOut, scale:2, opacity:0},"-=1")
.from(".foto5 .boxNumeral", 1.5, {ease: Expo.easeInOut, x:"100px", opacity:0},"-=0.7")


/////slider 5
.addPause()
.to(".foto5", 1, {ease: Expo.easeInOut, backgroundPosition: "bottom" })
.to(".ctnCentral", 1, {ease: Expo.easeInOut, y:"0px", opacity:1},"-=1")
.from(".foto5 .bordaHome", timeLinha,{width:0,autoAlpha:"0"},"-=0.1")
.from(".foto5 .boxDescri p", time,{autoAlpha:"0"},"-=0.5")
.from(".foto5 .btnSaiba", 1.1,{autoAlpha:"0"},"-=0.3");



$('.js-click-home').on('click',function() {
	tl1.play();
});


$(window).bind('mousewheel DOMMouseScroll', function(event){
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        tl1.reverse()
    }
    else {
        tl1.play()
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
            alert('Left'); /* Left swipe */
        } else {
             alert('Right'); /* Right swipe */
        }                       
    } else {
        if ( yDiff > 0 ) {
			tl1.play() /* UP swipe */
        } else { 
			tl1.reverse() /* down swipe */
        }    
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};





///////////////////////// HOME ABRE