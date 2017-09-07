
var logo = $(".logo"),
    texto1 = $(".texto1"),
    texto2 = $(".texto2"),
    traco = $(".traco"),
    texto3 = $(".texto3"),
    photo = $(".photo"),
    photo1 = $(".photo1"),
    photo2 = $(".photo2"),
    photo3 = $(".photo3"),
tl = new TimelineMax({onComplete: goBack}); //Ao Completar ele executa a Função goBack

tl //Inicia TimeLIne
.staggerFrom(logo,  1, {scale:0.05, autoAlpha: 0})
  .from(texto1, 1.5, {y: -15, autoAlpha: 0, ease:Expo.easeOut}, '-=0.1')

  .from(texto3, 1.5, {y: -15, autoAlpha: 0, ease:Expo.easeOut}, '-=0.4')

  .add("loopHere") //Label

  .from(photo,  2, {width: 0, autoAlpha: 0, ease:Expo.easeOut},'-=0.2')
  
  .from(photo1,  2, {width: 0, delay:3, autoAlpha: 0, ease:Expo.easeOut})
  
  .from(photo2, 2, {width: 0, delay:3, autoAlpha: 0, ease:Expo.easeOut})

  .from(photo3, 2, {width: 0, delay:3, autoAlpha: 0, ease:Expo.easeOut});

function goBack() {
  tl.play(2,"loopHere"); //Executa a Label
  
}
   
 

$(".menu").hide();

$(".btn").click(function() {
  $(".menu").toggle("fold", 700);
});
