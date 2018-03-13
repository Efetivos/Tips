var lengSlides = $('.back').length, // Quantidade de Elementos com a classe contida  no seletor // igual a 5
    slideAtual = 1; // Slide Inicio = 1
    animating = false; // Nao está animando
    hScreen = $(window).height(); // Altura da Tela em px
    time = 2.2, // Tempo da Animação
    tlActive = false,
    haveDescr = false,
    nameSection = ''; //string vazia que vai receber o nome da section no evento

    function notAnimating () {
        animating = false;
    }



    TweenMax.set('.ctnCentral .descricao ',{opacity:0})
    function animeNoDescr(section, descr) { //funcao que recebe por parametro o nome da section, passada pelo evento        
        tlActive = true;
        if(!descr){
        let tlDescr = new TimelineMax({delay:time}) //        
         .fromTo(section+' .ctnCentral', time/1.5, {y:300, opacity:0},{y:0, opacity:1, ease: Power3.easeOut})// section+' .ctnCentral'  é a concactenação do parametro passado pelo evento mais o seletor animado = '.tm$ .ctnCentral'
         .add(function(){ 
            if(section != '.tm1') {
                TweenMax.fromTo(section+' .ctnCentral', time/1.5, {y:300, opacity:0},{y:180, opacity:1, ease: Power3.easeOut})
            }
         },0) 
         .from(section+' .boxTriagulo', time/1.5, {scale:1.2, opacity:0, ease: Power3.easeOut},'-=1.6')
         .from(section+' .boxNumeral', time/1.5, {x:100, opacity:0, ease: Power3.easeInOut, onComplete: notAnimating},'-=1.6')
         
         return tlDescr;
        }
         if(descr){
                TweenMax.to(section+' .ctnCentral',time,{y:0, ease: Power3.easeInOut, onComplete: notAnimating})
                TweenMax.fromTo(section+' .ctnCentral .descricao',time,{opacity:0},{opacity:1, ease: Power3.easeInOut})
                 haveDescr = false; 
                 tlActive = false;
         }
         return tlDescr;
        }

        



    $('.desce').click(function(){        
        if(slideAtual < lengSlides && !animating && !tlActive ){            
            nameSection = '.tm'+slideAtual; 
            slideAtual ++;    
            TweenMax.to('.ctnCentral', time/1.5, {y:300, opacity:0 , ease: Power3.easeOut}),
            TweenMax.to('.main', time, {y:'-= '+hScreen, ease: Power3.easeInOut}); //'-=768'
        }
    });

    
    $('.desce').click(function(){        
        if(slideAtual <= lengSlides && !animating){
            animating = true;
            nameSection = '.tm'+slideAtual; // recece e concatena o .tm com o valor da variavel slideAtual
                    if ($(nameSection+' .descricao').hasClass('boxDescri') && tlActive) {
                        haveDescr = true;
                        animeNoDescr(nameSection, haveDescr);
                    }
                   animeNoDescr(nameSection); //chama a funcao e passa por parametro a concactenação da variavel acima
        // nameSection = ($('.back').attr('class').split(' ')[2])
        }
    });

    $('.sobe').click(function(){
        if( slideAtual > 1 && !animating  && !tlActive ){ 
            slideAtual --;
            nameSection = '.tm'+slideAtual;
            TweenMax.to('.ctnCentral', time/1.5, {y:300, opacity:0 , ease: Power3.easeOut}),
            TweenMax.to('.main', time, {y:'+= '+hScreen, ease: Power3.easeInOut}); //'+=768'        
        }
    });


    $('.sobe').click(function(){
        if( slideAtual > 1 && !animating){
            animating = true;
            slideAtual --;
            nameSection = '.tm'+slideAtual;
                    if ($(nameSection+' .descricao').hasClass('boxDescri')) {
                        haveDescr = true;
                        animeNoDescr(nameSection, haveDescr);
                    }
        
        animeNoDescr(nameSection);
        
        }
    });

    $('button').click(function(){
        
        console.log(nameSection);
    });
    