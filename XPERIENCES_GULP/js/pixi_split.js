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
   .add('ph1', 'https://i.imgur.com/G21DasO.jpg')
   .add('ph2', 'https://i.imgur.com/QVbaeM5.jpg')
   .add('ph3', 'https://i.imgur.com/yXUuQ4X.jpg')
   .add('ph4', 'https://i.imgur.com/vaUjhCo.jpg')


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
   
    TweenLite.set([ph1, ph2, ph3, ph4], {pixi:{scale:1.8}});
    TweenLite.set([ph1, ph2, ph3, ph4],{pixi:{colorize:"white", colorizeAmount:.6}})
    TweenMax.set([retBg, retBg2, retBg3, retBg4],{pixi:{skewX:-20, scaleX: 1.4, scaleY: 1.08}})
    TweenMax.set([retSplit, retSplit2, retSplit3, retSplit4],{pixi:{skewX:-20, scaleY: 1.08}})


    var move = wScreen * 1.2,
        time = 2.6,
        myEase = Power4.easeInOut;
   
    var tlMoveGraph = new TimelineMax({repeat: -1, yoyo:true})
    
        .from(retBg, time, {pixi:{x:-(move + (wScreen/4.8))}, ease: myEase})
        .from(retSplit, time, {pixi:{x:- move}, ease: myEase},0)
        .to(retSplit, time, {pixi:{x:move}, ease: myEase},'juntos2')
    
        //SLIDE2
        .from(retBg2, time, {pixi:{x:-(move + (wScreen/4.8))}, ease: myEase},'juntos2')
        .from(retSplit2, time, {pixi:{x:- move}, ease: myEase},'juntos2')
        .to(retSplit2, time, {pixi:{x:move}, ease: myEase},'juntos3')
    
        //SLIDE3
        .from(retBg3, time, {pixi:{x:-(move + (wScreen/4.8))}, ease: myEase},'juntos3')
        .from(retSplit3, time, {pixi:{x:- move}, ease: myEase},'juntos3')
        .to(retSplit3, time, {pixi:{x:move}, ease: myEase},'juntos4')
    
        //SLIDE4
        .from(retBg4, time, {pixi:{x:-(move + (wScreen/4.8))}, ease: myEase},'juntos4')
        .from(retSplit4, time, {pixi:{x:- move}, ease: myEase},'juntos4')
        .to(retSplit4, time, {pixi:{x:move}, ease: myEase})

}


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
