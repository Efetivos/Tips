//TweenLite Animation
/*var bora = $('.bora'),
    acord = $('.acord')[0].firstElementChild; //Variavel Recebe CLasse

TweenLite.to(acord, 1, {opacity:0, y: 50}); //Passar variavel que recebe classe*/



//TimeLIneLite
var p = $('p'),
    img = $('img'),
    acord = $('acord'),
    listItem = $('ul li')[0].firstElementChild,
    listItem2 = $('ul li')[1].firstElementChild,
    listItem3 = $('ul li')[2].firstElementChild,
    listItem4 = $('ul li')[3].firstElementChild,
    listItem5 = $('ul li')[4].firstElementChild,
    buttons =$('button'),
    tl = new TimelineLite();
  
  
  tl //Inicia TimeLIne
  .staggerFrom(buttons, 1, {cycle: { x: [50, -50]}, autoAlpha: 0, ease:Power1.easeOut }, 0.1) //Animando Botões

  .from(p, 0.6, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
  .from(img, 0.6, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.3')
  .from(listItem, 0.6, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.3')
  .from(listItem2, 0.6, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.3')
  .from(listItem3, 0.6, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.3')
  .from(listItem4, 0.6, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.3')
  .from(listItem5, 0.6, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.3');



//tl.pause(); /Pausa TImeLine

$('#btnPlay').on('click', function(){
  tl.play();
});

$('#btnPause').on('click', function(){
  tl.pause();
});

$('#btnResume').on('click', function(){
  tl.resume();
});

$('#btnReverse').on('click', function(){
  tl.reverse();
});

$('#btnSpeedUp').on('click', function(){
  tl.timeScale(3);
});

$('#btnSlowDown').on('click', function(){
  tl.timeScale(0.5);
});

$('#btnSeek').on('click', function(){
  tl.seek(1);
});

$('#btnProgress').on('click', function(){
  tl.progress(0.5);
});

$('#btnRestart').on('click', function(){
  tl.restart();
});
