var lengSlides = $('.back').length, // Quantidade de Elementos com a classe contida  no seletor // igual a 5
    slideAtual = 1; // Slide Inicio = 1
    animating = false; // Nao está animando
    hScreen = $(window).height(); // Altura da Tela em px
    time = 2.2, // Tempo da Animação
    haveDescr = false,
    nameSection = ''; //string vazia que vai receber o nome da section no evento

    function notAnimating () {
        animating = false;
    }




    function animeNoDescr(section, descr) { //funcao que recebe por parametro o nome da section, passada pelo evento
        var tlDescr = new TimelineMax({delay:time}) //        
         .fromTo(section+' .ctnCentral', time/1.5, {y:300, opacity:0},{y:0, opacity:1, ease: Power3.easeOut})// section+' .ctnCentral'  é a concactenação do parametro passado pelo evento mais o seletor animado = '.tm$ .ctnCentral'
         .add(function(){ 
            if(section != '.tm1') {
                TweenMax.fromTo(section+' .ctnCentral', time/1.5, {y:300, opacity:0},{y:180, opacity:1, ease: Power3.easeOut})
            }
         },0) 
         .from(section+' .boxTriagulo', time/1.5, {scale:1.2, opacity:0, ease: Power3.easeOut})
         .from(section+' .boxNumeral', time/1.5, {x:100, opacity:0, ease: Power3.easeInOut, onComplete: notAnimating})
         .add('end');
         if(descr){
/*              tlDescr.seek('end');
             TweenMax.from('.descricao',1,{opacity:0,onComplete: notAnimating})
             haveDescr = false; */
         }
         return tlDescr;
        }

        


    $('.desce').click(function(){        
        if(slideAtual < lengSlides && !animating){
            animating = true;
            slideAtual ++;
            nameSection = '.tm'+slideAtual; // recece e concatena o .tm com o valor da variavel slideAtual
                    if ($(nameSection+' .descricao').hasClass('boxDescri')) {
                        
                    }
                    else {
                        
                    }
                    TweenMax.to('.ctnCentral', time/1.5, {y:300, opacity:0 , ease: Power3.easeOut}),
                    TweenMax.to('.main', time, {y:'-= '+hScreen, ease: Power3.easeInOut, onComplete: notAnimating}); //'-=768'
                    animeNoDescr(nameSection); //chama a funcao e passa por parametro a concactenação da variavel acima
        // nameSection = ($('.back').attr('class').split(' ')[2])
       
       
       // tlDescr.play(0)
        }
    });



    $('.sobe').click(function(){
        if( slideAtual > 1 && !animating){
            animating = true;
            slideAtual --;
            nameSection = '.tm'+slideAtual;
                    if ($(nameSection+' .descricao').hasClass('boxDescri')) {

                    }
            TweenMax.to('.ctnCentral', time/1.5, {y:300, opacity:0 , ease: Power3.easeOut}),
            TweenMax.to('.main', time, {y:'+= '+hScreen, ease: Power3.easeInOut}); //'+=768'
        
        animeNoDescr(nameSection);
        
        }
    });
