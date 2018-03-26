var lengPhotos = $('.ctn-slide-lightbox .photo-trg').length,
    wScreen = $(window).width(),
    $holderLb = $('.holder-slide-lightbox'),
    time = 1,
    $boxPhotoTrigger = $('.box-photo-galeria-trg'),
    $ctnLightBox = $('.ctn-slide-lightbox'),
    myEase = Power3.easeInOut;


    TweenMax.set($holderLb,{width: wScreen*lengPhotos});
    TweenMax.set($ctnLightBox,{autoAlpha:0});

//TweenLite.defaultEase = Linear.easeNone;



function lightbox (photoLb) {
    TweenMax.set($holderLb,{x:-wScreen*(photoLb-1)})

    var tlLightBox = new TimelineMax()
        .fromTo($ctnLightBox,time*1.6, {autoAlpha:0, yPercent: 100},{yPercent:0, autoAlpha:1, ease: Power4.easeInOut}) 
        .fromTo($holderLb.find('.photo-trg'),time*2, {autoAlpha:0, scale:1.2},{autoAlpha:1, scale: 1, ease: Power4.easeOut},'-=.3') 
        
        $(document).keyup(function(e) {
            if (e.keyCode == 27) { // tecla Esc
                TweenMax.to($ctnLightBox,2,{autoAlpha:0})
           }
       });
        

        $(document).keyup(function(e) {
            if (e.keyCode == 37) { // tecla Left
                TweenMax.to($holderLb, time, {x:'+='+wScreen, ease: myEase})
           }
       });

        $(document).keyup(function(e) {
            if (e.keyCode == 39) { // tecla Right
                TweenMax.to($holderLb, time, {x:'-='+wScreen, ease: myEase})
           }
       });
}

var lastClass, clicked, firstLetter, minusP;
$($boxPhotoTrigger).click(function(){
        lastClass = $(this).attr('class').split(' ')[1]; //pega ultima Classe do This = ElementoClickado
        clicked = lastClass.slice(-2) //pega as duas ultimas Letras da Class clicada
        firstLetter = clicked.substring(0,1) //pega a primeira letra da var clicked

        if(firstLetter == 'p'){ //verifica se a primeira letra é igual p
            clicked = clicked.slice(-1) //remove o p da class clicked
        }

        lightbox(clicked)

});



