var wScreen = $(window).width();
var hScreen = $(window).height();
// ---------- alias photo ...
var baseUrl = 'https://raw.githubusercontent.com/Efetivos/Barbara_vue/master/src/components/images/galeria/';

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
   .add('be1', 'https://i.imgur.com/G21DasO.jpg')
   .add('be2', 'https://i.imgur.com/G21DasO.jpg')
   .add('be3', baseUrl+'photo-be1.jpg')
   .add('be4', baseUrl+'photo-be4.jpg')
   .add('dpSprite','https://c1.staticflickr.com/9/8238/8386594140_53c742e9ea_c.jpg')
  //.on("progress", loadindFunction) //function while loading Sprites
  .load(setup);//Call Function after Loading

function loadindFunction(loader, resource) {
  console.log("loading: " + resource.url); 
  console.log("progress: " + loader.progress + "%"); 
}

var be1, be2, dpSprite, dpFilter;
var sizeSprite;
function setup() {
console.log("All files loaded");
  //Create the cat sprite
   
var graphics = new PIXI.Graphics();
   graphics.beginFill(0xFF700B, 1);
   graphics.drawRect(wScreen/3, 0, wScreen/1.8, hScreen);
   
   graphics.drawRect(wScreen/3, 0, wScreen/1.8, hScreen);
   // graphics.beginFill(0xFF700B, 1);
   // graphics.drawRect(100, 0, wScreen/3, hScreen);
   

   be1 = new Sprite(resources.be2.texture);
   be1.anchor.set(0.5);
   sizeSprite = be1.width;
   
   be2 = new Sprite(resources.be2.texture);
   be2.anchor.set(0.5);

   
   container.addChild(be1, be2);
   app.stage.addChild(graphics);
   be2.mask = graphics;

   //TweenLite.to(be1, 1, {pixi:{blur:20}});
   
    TweenLite.set(be1, {pixi:{scale:1.3}});
   TweenLite.set(be1,{pixi:{colorize:"black", colorizeAmount:.3}})
   TweenMax.set(graphics,{pixi:{skewX:-20, scaleY: 1.08}})
   
  var tlMoveGraph = new TimelineMax({yoyo:true, repeat:-1})
     .from(graphics,1.9,{pixi:{x:-wScreen, scaleY: 1.08}, ease: Power3.easeOut})
   
     .to(graphics,1.9,{pixi:{x:wScreen, scaleY: 1.08}, ease: Power3.easeIn})
   
//    var moveIt = wScreen /2;
//    var tlPixi = new TimelineMax()
//       .from(be2,4,{pixi:{x: moveIt/4}, ease: Power4.easeInOut})
//       .from(be1, 3,{pixi:{x: -moveIt/2}, ease: Power3.easeInOut},.5)
      
      
//    $(window).click( function(){
//       tlPixi.play(0)
//       tlPixiText.play(0)
//    })    
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
