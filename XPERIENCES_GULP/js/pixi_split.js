var wScreen = $(window).width();
var hScreen = $(window).height();
// ---------- alias photo ...
var baseUrl = 'https://raw.githubusercontent.com/Efetivos/nicole_vue/master/src/components/images/galeria/';

const main = document.querySelector("#main");


// ---------- alias Pixi ...
var Application = PIXI.Application, //Var Pixi init
    loader = PIXI.loader, //Var Pixi load Images
    resources = PIXI.loader.resources, //Var Pixi  Use Loadr Spritws
    Sprite = PIXI.Sprite, //Var Pixi  Sprite Create
    resources = PIXI.loader.resources; //Var Pixi source Sprite


// ---------- Init Pixi ... 
var app = new Application ({
  width: main.clientWidth, //Width Size from Id Main
  height: main.clientHeight, //Height Size from Id Main
  antialias: true,
   transparent: true, 
  view  //Choice Canvas Id View
});

const screen = app.screen;
const bgSize = new PIXI.Rectangle(0, 0, 1600, 900);
const container = new PIXI.Container();
app.stage.addChild(container);



// ---------- Load Images ...
loader 
   .add('ph1', 'https://raw.githubusercontent.com/Efetivos/gallery/master/houses/house4.jpg')
   .add('ph2', 'https://raw.githubusercontent.com/Efetivos/gallery/master/houses/house2.jpg')
   .add('ph3', 'https://raw.githubusercontent.com/Efetivos/gallery/master/houses/house5.jpg')
   .add('ph4', 'https://raw.githubusercontent.com/Efetivos/gallery/master/houses/house1.jpg')


/*     .add('ph1', baseUrl + 'nicole1.jpg')
    .add('ph2', baseUrl + 'nicole4.jpg')
    .add('ph3', baseUrl + 'nicole5.jpg')
    .add('ph4', baseUrl + 'nicole6.jpg') */
  //.on("progress", loadindFunction) //function while loading Sprites
  .load(setup);//Call Function after Loading

function loadindFunction(loader, resource) {
  console.log("loading: " + resource.url); 
  console.log("progress: " + loader.progress + "%"); 
}

var ph1, ph1m, ph2, ph2m, ph3, ph3m, ph4, ph4m;
function setup() {
console.log("All files loaded");
   



// --------------
// ----- --------------- Slide1 
// ----- ------ -------------------------------- 
var retBg = new PIXI.Graphics();
    retBg.beginFill(0xFF700B, 1);
    retBg.drawRect(-wScreen/2, 0, wScreen, hScreen);
    retBg.drawRect(-wScreen/2, -hScreen, wScreen, hScreen);

var retSplit = new PIXI.Graphics();
    retSplit.beginFill(0xFF700B, 1);
    retSplit.drawRect(-(wScreen*.4), 0, wScreen/1.4, hScreen);
    retSplit.drawRect(-(wScreen*.4), -hScreen, wScreen/1.4, hScreen);

//Spreites
   ph1 = new Sprite(resources.ph1.texture);   ph1.anchor.set(0.5);   
   ph1m = new Sprite(resources.ph1.texture);   ph1m.anchor.set(0.5);

   
   container.addChild( retBg, retSplit, ph1, ph1m);
   ph1.mask = retBg;
   ph1m.mask = retSplit;








// --------------
// ----- --------------- Slide2 
// ----- ------ -------------------------------- 
var retBg2 = new PIXI.Graphics();
    retBg2.beginFill(0xFF700B, 1);
    retBg2.drawRect(-wScreen/2, 0, wScreen, hScreen);
    retBg2.drawRect(-wScreen/2, -hScreen, wScreen, hScreen);

var retSplit2 = new PIXI.Graphics();
    retSplit2.beginFill(0xFF700B, 1);
    retSplit2.drawRect(-(wScreen*.4), 0, wScreen/1.4, hScreen);
    retSplit2.drawRect(-(wScreen*.4), -hScreen, wScreen/1.4, hScreen);

//Spreites
   ph2 = new Sprite(resources.ph2.texture);   ph2.anchor.set(0.5);   
   ph2m = new Sprite(resources.ph2.texture);   ph2m.anchor.set(0.5);

   
   container.addChild( retBg2, retSplit2, ph2, ph2m);
   ph2.mask = retBg2;
   ph2m.mask = retSplit2;





// --------------
// ----- --------------- Slide2 
// ----- ------ -------------------------------- 
var retBg3 = new PIXI.Graphics();
    retBg3.beginFill(0xFF700B, 1);
    retBg3.drawRect(-wScreen/2, 0, wScreen, hScreen);
    retBg3.drawRect(-wScreen/2, -hScreen, wScreen, hScreen);

var retSplit3 = new PIXI.Graphics();
    retSplit3.beginFill(0xFF700B, 1);
    retSplit3.drawRect(-(wScreen*.4), 0, wScreen/1.4, hScreen);
    retSplit3.drawRect(-(wScreen*.4), -hScreen, wScreen/1.4, hScreen);

//Spreites
   ph3 = new Sprite(resources.ph3.texture);   ph3.anchor.set(0.5);   
   ph3m = new Sprite(resources.ph3.texture);   ph3m.anchor.set(0.5);

   
   container.addChild( retBg3, retSplit3, ph3, ph3m);
   ph3.mask = retBg3;
   ph3m.mask = retSplit3;






// --------------
// ----- --------------- Slide2 
// ----- ------ -------------------------------- 
var retBg4 = new PIXI.Graphics();
    retBg4.beginFill(0xFF700B, 1);
    retBg4.drawRect(-wScreen/2, 0, wScreen, hScreen);
    retBg4.drawRect(-wScreen/2, -hScreen, wScreen, hScreen);

var retSplit4 = new PIXI.Graphics();
    retSplit4.beginFill(0xFF700B, 1);
    retSplit4.drawRect(-(wScreen*.4), 0, wScreen/1.4, hScreen);
    retSplit4.drawRect(-(wScreen*.4), -hScreen, wScreen/1.4, hScreen);

//Spreites
   ph4 = new Sprite(resources.ph4.texture);   ph4.anchor.set(0.5);   
   ph4m = new Sprite(resources.ph4.texture);   ph4m.anchor.set(0.5);

   
   container.addChild( retBg4, retSplit4, ph4, ph4m);
   ph4.mask = retBg4;
   ph4m.mask = retSplit4;



   //TweenLite.to([ph1, ph2, ph3, ph4], 1, {pixi:{blur:6}});
   
    TweenLite.set([ph1, ph2, ph3, ph4], {pixi:{scale:1.25}});
    TweenLite.set([ph1, ph2, ph3, ph4],{pixi:{colorize:'#fff', colorizeAmount:.65}})
    TweenMax.set([retBg, retBg2, retBg3, retBg4],{pixi:{skewX:-20, scaleX: 1.4, scaleY: 1.08}})
    TweenMax.set([retSplit, retSplit2, retSplit3, retSplit4],{pixi:{skewX:-20, scaleY: 1.08}})

    //SCALE MOBILE
    if($(window).width() < 1024) {
        TweenMax.set([retSplit, retSplit2, retSplit3, retSplit4],{pixi:{scaleX: 2}})
        TweenMax.set([retBg, retBg2, retBg3, retBg4],{pixi:{scaleX: 3}})
    }

    var move = wScreen*2.8,
        time = 2.6,
        myEase = Power4.easeInOut;

        if($(window).width() > 1024) {
            move = wScreen * 1.2
        }
         if($(window).width() > 1800) {
            move = wScreen /1.005;            
            TweenMax.set([retSplit, retSplit2, retSplit3, retSplit4],{pixi:{scaleX: 0.7}})
         }
   
    var tlMoveGraph = new TimelineMax({repeat: -1, yoyo:true})    
        .from(ph1, time/1.2, {pixi:{blur:50}, ease: myEase},0)
        .from(retBg, time, {pixi:{x:-(move + (wScreen/4.8))}, ease: myEase},0)
        .from(retSplit, time, {pixi:{x:- move}, ease: myEase},0).addPause()
        .to(retSplit, time, {pixi:{x:move}, ease: myEase},'juntos2')
    
        //SLIDE2
        .from(ph2, time/1.2, {pixi:{blur:50}, ease: myEase},'juntos2')
        .from(retBg2, time, {pixi:{x:-(move + (wScreen/4.8))},onStart: outTitle2, ease: myEase},'juntos2')
        .from(retSplit2, time, {pixi:{x:- move}, ease: myEase},'juntos2').addPause()
        .to(retSplit2, time, {pixi:{x:move}, ease: myEase},'juntos3')
    
        //SLIDE3
        .from(ph3, time/1.2, {pixi:{blur:50}, ease: myEase},'juntos3')
        .from(retBg3, time, {pixi:{x:-(move + (wScreen/4.8))}, onStart: outTitle3, ease: myEase},'juntos3')
        .from(retSplit3, time, {pixi:{x:- move}, ease: myEase},'juntos3').addPause()
        .to(retSplit3, time, {pixi:{x:move}, ease: myEase},'juntos4')
    
        //SLIDE4
        .from(ph4, time/1.2, {pixi:{blur:50}, ease: myEase},'juntos4')
        .from(retBg4, time, {pixi:{x:-(move + (wScreen/4.8))}, onStart: outTitle4, ease: myEase},'juntos4')
        .from(retSplit4, time, {pixi:{x:- move}, ease: myEase},'juntos4').addPause()
        .to(retSplit4, time, {pixi:{x:move}, ease: myEase})




//
// JS OF HTML
// ===========================================================================
var titleW = $('.title').width() * 1.2,
    titleH = $('.title').height() + 10,
    delayTime = 1.25,
    count = 1

    TweenMax.set('.holder-title',{width: titleW, height: titleH});

    var tlTitleIn = new TimelineMax({paused:true})
        .from('.title2', .8, {xPercent: -100, ease: Power3.easeOut}).addPause()
        .from('.title3', .8, {xPercent: -100, ease: Power3.easeOut}).addPause()
        .from('.title4', .8, {xPercent: -100, ease: Power3.easeOut}).addPause()
        .from('.title5', .8, {xPercent: -100, ease: Power3.easeOut}).addPause()
   
    function outTitle(){
        var tlTitle = new TimelineMax()
            .to('.wrap-title1',.4,{delay: delayTime, width:'0%'})
            .to('.title1',.4,{delay: delayTime, x:-titleW},0)
            .add(function(){tlTitleIn.play()})
    }
   
    function outTitle2(){
        var tlTitle = new TimelineMax()
            .to('.wrap-title2',.4,{delay: delayTime, width:'0%'})
            .to('.title2',.4,{delay: delayTime, x:-titleW},0)
            .add(function(){tlTitleIn.play()})
    }
   
    function outTitle3(){
        var tlTitle = new TimelineMax()
            .to('.wrap-title3',.4,{delay: delayTime, width:'0%'})
            .to('.title3',.4,{delay: delayTime, x:-titleW},0)
            .add(function(){tlTitleIn.play()})
    }
   
    function outTitle4(){
        var tlTitle = new TimelineMax()
            .to('.wrap-title4',.4,{delay: delayTime, width:'0%'})
            .to('.title4',.4,{delay: delayTime, x:-titleW},0)
            .add(function(){tlTitleIn.play()})
    }


  /* -------------- MOUSE WHEEL---------------- */
  $(window).bind('mousewheel DOMMouseScroll', function(event){
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        count --
        tlMoveGraph.reverse()
    }
    else {
        count ++
        tlMoveGraph.play()
    }
});
























} //close Setup Pixi


let resized = true; 
app.ticker.add(onTick);
window.addEventListener("resize", () => resized = true);


//
// ON TICK
// ===========================================================================
function onTick(delta) {
  
  if (resized) {
    onResize();
    resized = false;
  }
}

//
// ON RESIZE
// ===========================================================================
function onResize() {
    
  const width = main.clientWidth;
  const height = main.clientHeight;  
  
  const scaleX = width / bgSize.width;
  const scaleY = height / bgSize.height;
  const scale = Math.max(scaleX, scaleY);
      
  app.renderer.resize(width, height);
    
  container.scale.set(scale);
  container.position.set(width / 2, height / 2);  


}



