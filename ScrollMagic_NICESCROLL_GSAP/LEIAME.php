<--->
#TUTORIAL DE COMO USAR ScrollMagic.Js
  
Importar JQuery.js
<script src="js/jquery-3.2.1.js"></script> //Caso esteja na pasta ou nuscar no //cdnjs.cloudflare.com/ajax/libs/

Importar ScrollMagic.Js
<script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js"></script>
  
Cria um App.js ou Main.Js (Controlador do Scroll)
<script src="main.js"></script> 
  
Criar uma classe Mae e depois um Classe filha que vai animar. Ex.:
  
  <---> Arquivo CSS </--->
  .bora{
  border-width:0px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease-out;

}

.bora.fade-in{
  opacity: 1;
  transform: translateY(0);
}

  
</--->