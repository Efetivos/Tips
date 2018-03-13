/* 
TweenMax.to(".boxDescri p", 0, {opacity:"1"});
TweenMax.to(".bordaHome", 0, {width:"0", opacity:"0"});
TweenMax.to(".btnSaiba", 0, {opacity:"0"});

TweenMax.to(".lt1", 0.5, { width:"100%"},"-=0.6")
TweenMax.to(".tc1", 0.5, { scale:1.7, backgroundColor:"#fff"},"-=0.6")



var tl1 = new TimelineLite({paused: true});
  	tl1
  	
		
  	.to(".bordaT1", 0.4, { height:"100%"})
  	.to(".bordaR1", 0.4, { width:"100%"},"-=0.4")
  	.to(".bordaB1", 0.4, { height:"100%"},"-=0.4")
    .to(".bordaL1", 0.4, { width:"100%"},"-=0.4")

    .to(".lt1", 0.5, { width:"0%"},"-=0.5")
    .to(".tc1", 0.5, { scale:1, backgroundColor:"transparent"},"-=0.5")  	
    
  	.to(".ctnCentral", 1.2, {ease: Expo.easeInOut, y:"300px", opacity:0},"-=0.1")
  	.to(".main", 1.5, {ease: Expo.easeInOut, top:"-100vh"},"-=0.7")

    .to(".lt2", 0.5, { width:"100%"},"-=1")
    .to(".tc2", 0.5, { scale:1.7, backgroundColor:"#fff"},"-=1")

  	.to(".bordaT1", 0.5, { height:"0%"})
  	.to(".bordaR1", 0.5, { width:"0%"},"-=0.5")
  	.to(".bordaB1", 0.5, { height:"0%"},"-=0.5")
  	.to(".bordaL1", 0.5, { width:"0%"},"-=0.5")
  	.to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"250px", opacity:1},"-=1")
  	.from(".trianguloDesk", 1.5, {ease: Expo.easeInOut, scale:2, opacity:0},"-=1")
  	.from(".boxNumeral", 1.5, {ease: Expo.easeInOut, x:"100px", opacity:0},"-=0.7");

	

var tl2 = new TimelineLite({paused: true});
    tl2

    .to(".foto2", 1, {ease: Expo.easeInOut, backgroundPosition: "bottom" })
    .to(".ctnCentral", 1, {ease: Expo.easeInOut, y:"0px"},"-=1.1")
    .to(".bordaHome", 2.5, {ease: Expo.easeInOut, width:"100%", opacity:".5"},"-=1.1")
    .to(".boxDescri p", 1.5, {opacity:"1"},"-=0.3")
    .to(".btnSaiba", 0.5, {opacity:"1"},"-=0.3")
    
    .addPause()
    .to(".bordaT1", 0.5, { height:"100%"})
    .to(".bordaR1", 0.5, { width:"100%"},"-=0.5")
    .to(".bordaB1", 0.5, { height:"100%"},"-=0.5")
    .to(".bordaL1", 0.5, { width:"100%"},"-=0.5")
    
    .to(".lt2", 0.5,  { width:"0%"},"-=0.3")
    .to(".tc2", 0.5, { scale:1, backgroundColor:"transparent"},"-=0.3")

    
    
    .to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"300px", opacity:0},"-=1")
    .to(".main", 1.5, {ease: Expo.easeInOut, top:"-200vh"},"-=0.5")


    .to(".lt3", 0.5, { width:"100%"},"-=0.6")
    .to(".tc3", 0.5, { scale:1.7, backgroundColor:"#fff"},"-=0.6")

    .to(".boxDescri p", 0,{opacity:"0"})
    .to(".trianguloDesk", 0, {scale:2, opacity:0})
    .to(".boxNumeral", 0, {x:"100px", opacity:0})
    .to(".bordaHome", 0, {width:"0%", opacity:"0"})
    .to(".btnSaiba", 0, {opacity:"0"})

    .to(".bordaT1", 0.5, { height:"0%"})
    .to(".bordaR1", 0.5, { width:"0%"},"-=0.5")
    .to(".bordaB1", 0.5, { height:"0%"},"-=0.5")
    .to(".bordaL1", 0.5, { width:"0%"},"-=0.5")
    .to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"250px", opacity:1})
    .to(".trianguloDesk", 1.5, {ease: Expo.easeInOut, scale:1, opacity:1},"-=1")
    .to(".boxNumeral", 1.5, {ease: Expo.easeInOut, x:"0px", opacity:1},"-=0.5")



    .addPause()
    .to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"0px"})
    .to(".bordaHome", 2, {ease: Expo.easeInOut, width:"100%", opacity:".5"},"-=1")
    .to(".boxDescri p", 1.5, {opacity:"1"} ,"-=0.5")
    .to(".btnSaiba", 0.5, {opacity:"1"},"-=0.3");



    

var tl3 = new TimelineLite({paused: true});
    tl3


    .to(".foto3", 1, {ease: Expo.easeInOut, backgroundPosition: "bottom" })

    .to(".ctnCentral", 1, {ease: Expo.easeInOut, y:"0px"},"-=1.1")
    .to(".bordaHome", 2.5, {ease: Expo.easeInOut, width:"100%", opacity:".5"},"-=1.1")
    .to(".boxDescri p", 1.5, {opacity:"1"},"-=0.3")
    .to(".btnSaiba", 0.5, {opacity:"1"},"-=0.3")
    
    .addPause()
    .to(".bordaT1", 0.5, { height:"100%"})
    .to(".bordaR1", 0.5, { width:"100%"},"-=0.5")
    .to(".bordaB1", 0.5, { height:"100%"},"-=0.5")
    .to(".bordaL1", 0.5, { width:"100%"},"-=0.5")

    .to(".lt3", 0.5,  { width:"0%"},"-=0.3")
    .to(".tc3", 0.5, { scale:1, backgroundColor:"transparent"},"-=0.3")
    
    .to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"300px", opacity:0})
    .to(".main", 1.5, {ease: Expo.easeInOut, top:"-300vh"},"-=0.5")

    .to(".lt4", 0.5, { width:"100%"},"-=0.6")
    .to(".tc4", 0.5, { scale:1.7, backgroundColor:"#fff"},"-=0.6")

    .to(".boxDescri p", 0,{opacity:"0"})
    .to(".trianguloDesk", 0, {scale:2, opacity:0})
    .to(".boxNumeral", 0, {x:"100px", opacity:0})
    .to(".bordaHome", 0, {width:"0%", opacity:"0"})
    .to(".btnSaiba", 0, {opacity:"0"})

    .to(".bordaT1", 0.5, { height:"0%"})
    .to(".bordaR1", 0.5, { width:"0%"},"-=0.5")
    .to(".bordaB1", 0.5, { height:"0%"},"-=0.5")
    .to(".bordaL1", 0.5, { width:"0%"},"-=0.5")
    .to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"250px", opacity:1})
    .to(".trianguloDesk", 1.5, {ease: Expo.easeInOut, scale:1, opacity:1},"-=1")
    .to(".boxNumeral", 1.5, {ease: Expo.easeInOut, x:"0px", opacity:1},"-=0.5")



    .addPause()
    .to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"0px"})
    .to(".bordaHome", 2, {ease: Expo.easeInOut, width:"100%", opacity:".5"},"-=1")
    .to(".boxDescri p", 1.5, {opacity:"1"} ,"-=0.5")
    .to(".btnSaiba", 0.5, {opacity:"1"},"-=0.3"); 





       

var tl4 = new TimelineLite({paused: true});
    tl4

    .to(".foto4", 1, {ease: Expo.easeInOut, backgroundPosition: "bottom" })
    .to(".ctnCentral", 1, {ease: Expo.easeInOut, y:"0px"},"-=1.1")
    .to(".bordaHome", 2.5, {ease: Expo.easeInOut, width:"100%", opacity:".5"},"-=1.1")
    .to(".boxDescri p", 1.5, {opacity:"1"},"-=0.3")
    .to(".btnSaiba", 0.5, {opacity:"1"},"-=0.3")
    
    .addPause()
    .to(".bordaT1", 0.5, { height:"100%"})
    .to(".bordaR1", 0.5, { width:"100%"},"-=0.5")
    .to(".bordaB1", 0.5, { height:"100%"},"-=0.5")
    .to(".bordaL1", 0.5, { width:"100%"},"-=0.5")

    .to(".lt4", 0.5,  { width:"0%"},"-=0.3")
    .to(".tc4", 0.5, { scale:1, backgroundColor:"transparent"},"-=0.3")
    
    .to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"300px", opacity:0})
    .to(".main", 1.5, {ease: Expo.easeInOut, top:"-400vh"},"-=0.5")

    .to(".lt5", 0.5, { width:"100%"},"-=0.6")
    .to(".tc5", 0.5, { scale:1.7, backgroundColor:"#fff"},"-=0.6")

    .to(".boxDescri p", 0,{opacity:"0"})
    .to(".trianguloDesk", 0, {scale:2, opacity:0})
    .to(".boxNumeral", 0, {x:"100px", opacity:0})
    .to(".bordaHome", 0, {width:"0%", opacity:"0"})
    .to(".btnSaiba", 0, {opacity:"0"})

    .to(".bordaT1", 0.5, { height:"0%"})
    .to(".bordaR1", 0.5, { width:"0%"},"-=0.5")
    .to(".bordaB1", 0.5, { height:"0%"},"-=0.5")
    .to(".bordaL1", 0.5, { width:"0%"},"-=0.5")
    .to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"250px", opacity:1})
    .to(".trianguloDesk", 1.5, {ease: Expo.easeInOut, scale:1, opacity:1},"-=1")
    .to(".boxNumeral", 1.5, {ease: Expo.easeInOut, x:"0px", opacity:1},"-=0.5")



    .addPause()
    .to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"0px"})
    .to(".bordaHome", 2, {ease: Expo.easeInOut, width:"100%", opacity:".5"},"-=1")
    .to(".boxDescri p", 1.5, {opacity:"1"} ,"-=0.5")
    .to(".btnSaiba", 0.5, {opacity:"1"},"-=0.3");
  





var tl5 = new TimelineLite({paused: true});
    tl5

    .to(".foto5", 1, {ease: Expo.easeInOut, backgroundPosition: "bottom" })
    .to(".ctnCentral", 1, {ease: Expo.easeInOut, y:"0px"},"-=1.1")
    .to(".bordaHome", 2.5, {ease: Expo.easeInOut, width:"100%", opacity:".5"},"-=1.1")
    .to(".boxDescri p", 1.5, {opacity:"1"},"-=0.3")
    .to(".btnSaiba", 0.5, {opacity:"1"},"-=0.3");



var tl6 = new TimelineLite({paused: true});
    tl6
    
        
    .to(".bordaT1", 0.4, { height:"100%"})
    .to(".bordaR1", 0.4, { width:"100%"},"-=0.4")
    .to(".bordaB1", 0.4, { height:"100%"},"-=0.4")
    .to(".bordaL1", 0.4, { width:"100%"},"-=0.4")

    .to(".lt1", 0.5, { width:"0%"},"-=0.5")
    .to(".tc1", 0.5, { scale:1, backgroundColor:"transparent"},"-=0.5")     
    
    .to(".ctnCentral", 1.2, {ease: Expo.easeInOut, y:"300px", opacity:0},"-=0.1")
    .to(".main", 1.5, {ease: Expo.easeInOut, top:"-100vh"},"-=0.7")

    .to(".lt2", 0.5, { width:"100%"},"-=1")
    .to(".tc2", 0.5, { scale:1.7, backgroundColor:"#fff"},"-=1")

    .to(".bordaT1", 0.5, { height:"0%"})
    .to(".bordaR1", 0.5, { width:"0%"},"-=0.5")
    .to(".bordaB1", 0.5, { height:"0%"},"-=0.5")
    .to(".bordaL1", 0.5, { width:"0%"},"-=0.5")
    .to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"250px", opacity:1},"-=1")
    .from(".trianguloDesk", 1.5, {ease: Expo.easeInOut, scale:2, opacity:0},"-=1")
    .from(".boxNumeral", 1.5, {ease: Expo.easeInOut, x:"100px", opacity:0},"-=0.7");









$('.tm1').on('mousewheel click',function() {
        tl1.play();
	});


$('.tm2').on('mousewheel click',function() {
        tl2.play();
    });

$('.bt2').on('click',function() {
        tl6.play();
});


$('.tm3').on('mousewheel click',function() {
        tl3.play();
});


$('.tm4').on('mousewheel click',function() {
        tl4.play();
});


$('.tm5').on('mousewheel click',function() {
        tl5.play();
}); */