var cursorDecor = $('#cursor-decor')

$(document).on('mousemove', function(e){
    $(cursorDecor).css({
       left:  e.pageX -16,
       top:   e.pageY - 16
    });
});


$('#target, a').hover(
  function() {
    TweenMax.to(cursorDecor, .5,{scale:0.2});
    TweenMax.to(this, .5,{scale:0.8});
    TweenMax.to('#middle', .5,{scale:5});
  } , function (){
    TweenMax.to(cursorDecor, .5,{scale:1});
     TweenMax.to(this, .5,{scale:1});
    TweenMax.to('#middle', .5,{scale:1});
  }
);

