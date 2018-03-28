var lengPhotos = $('.ctn-slide-lightbox .photo-trg').length,
    wScreen = $(window).width(),
    $holderLb = $('.holder-slide-lightbox'),
    time = 1,
    $boxPhotoTrigger = $('.box-photo-galeria-trg'),
    $ctnLightBox = $('.ctn-slide-lightbox'),
    myEase = Power3.easeInOut,
    animating = false;


TweenMax.set($holderLb, { width: wScreen * lengPhotos });
TweenMax.set($ctnLightBox, { autoAlpha: 0 });

//TweenLite.defaultEase = Linear.easeNone;

function notAnime() {
    animating = false;
}
var bp1 = $('.bp1'), //primeiro BoxPhoto
    lastBp = $('.bp' + lengPhotos), //ultimo box-photo
    count; //contador

function lightbox(photoLb) {
    TweenMax.set($holderLb, { x: -wScreen * (photoLb - 1) })

    var tlLightBox = new TimelineMax()
        .fromTo($ctnLightBox, time * 1.6, { autoAlpha: 0, yPercent: 100 }, { yPercent: 0, autoAlpha: 1, ease: Power4.easeInOut })
        .fromTo($holderLb.find('.photo-trg'), time * 2, { autoAlpha: 0, scale: 1.2 }, { autoAlpha: 1, scale: 1, ease: Power4.easeOut }, '-=.3')


    count = photoLb;
    $(document).keyup(function (e) {
        if (e.keyCode == 27 && !animating) { // tecla Esc
            TweenMax.to($ctnLightBox, 2, { autoAlpha: 0 })
        }
    });



    $(document).keyup(function (e) {
        if (e.keyCode == 37 && !animating && !bp1.hasClass('active')) { // tecla Left
            animating = true;
            count--
            $('.box-photo-galeria-lb').removeClass('active');
            $('.ctn-slide-lightbox .bp' + count).addClass('active');
            TweenMax.to($holderLb, time, { x: '+=' + wScreen, ease: myEase, onComplete: notAnime })
        }
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 39 && !animating && !lastBp.hasClass('active')) { // tecla Right
            animating = true;
            count++
            $('.box-photo-galeria-lb').removeClass('active');
            $('.ctn-slide-lightbox .bp' + count).addClass('active');
            TweenMax.to($holderLb, time, { x: '-=' + wScreen, ease: myEase, onComplete: notAnime })
        }
    });
}

var lastClass, clicked, firstLetter, minusP;
$($boxPhotoTrigger).click(function () {
    lastClass = $(this).attr('class').split(' ')[1]; //pega ultima Classe do This = ElementoClickado
    clicked = lastClass.slice(-2) //pega as duas ultimas Letras da Class clicada
    firstLetter = clicked.substring(0, 1) //pega a primeira letra da var clicked

    if (firstLetter == 'p') { //verifica se a primeira letra é igual p
        clicked = clicked.slice(-1) //remove o p da class clicked
    }

    lightbox(clicked)

});



/* Step by Step
1. create Animating, e add  on Events
2. create function notAnime
function notAnime() {
    animating = false;
}

3. Create Variavels for get Block evetns
var bp1 = $('.bp1'), //primeiro box-photo
    lastBp = $('.bp' + lengPhotos), //ultimo box-photo
    count; //contador;

4.
        if (e.keyCode == 37 && !animating && !bp1.hasClass('active')) { // hasClass verifica se tem a class Active
            animating = true;
            count--
            $('.box-photo-galeria-lb').removeClass('active');
            $('.ctn-slide-lightbox .bp' + count).addClass('active');
        }

        if (e.keyCode == 39 && !animating && !lastBp.hasClass('active')) { // hasClass verifica se tem a class Active
            animating = true;
            count++
            $('.box-photo-galeria-lb').removeClass('active');
            $('.ctn-slide-lightbox .bp' + count).addClass('active');
        }
*/
