$(document).ready(function(){
  //Init ScrollMagic
 var controller = new ScrollMagic.Controller(); 
  
  

  
  //loop each.element
  $('.bora').each(function(){ //Anima Cada elemento  da classe ('.bora)

  //Build Scene
  var ourScene = new ScrollMagic.Scene({ //Constroi a Cena
    triggerElement: this, //Escolhe a Classe a ser animada (.bora)
    triggerHook: 0.75 //porcentagem que aparece o elemento animado 1 = 100%

})
  .setClassToggle(this,'fade-in')//This = '.bora' é atribuido a classe fade-in
  .addIndicators() //indicador que apresenta as triggers
  .addTo(controller);

});
  
});
