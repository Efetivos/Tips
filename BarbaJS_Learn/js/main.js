var wScreen = $(window).width(),
    midScreen = wScreen /2,
    animating = false,
    $holder = $('.holder'),
    $trgNext = $('.trigger-next'),
    $trgPrev = $('.trigger-prev'),
    count = 1;
    
    function notAnime() { animating = false;}
    $trgPrev.click(function(){
        if(count > 1 && !animating) {
            animating = true;
            TweenMax.to('.holder',1.8,{x: '+='+wScreen*1, ease: Power3.easeInOut, onComplete: notAnime})
            count --;
            $('.dyna').text('0'+count);
        }
        
    });

    $trgNext.click(function(){
        if(count < 5 && !animating) {
            animating = true;
            TweenMax.to('.holder',1.8,{x: '-='+wScreen*1, ease: Power3.easeInOut, onComplete: notAnime})
            count ++;
            $('.dyna').text('0'+count);
        }
    });




var lastElementClicked;
var nameLast;

Barba.Dispatcher.on('linkClicked', function(el) {
  lastElementClicked = el,
  nameLast = lastElementClicked.className.split(' ')[0];
  nameLastEnter = lastElementClicked.className.split(' ')[1];
  
});



// ------------------- INIT TRANSITION  ............. 
var ExpandTransition = Barba.BaseTransition.extend({
    start: function() {
      Promise
        .all([this.newContainerLoading, this.beforeLeave()]) //Call Function = BeforeLeave
        .then(this.beforeEnter.bind(this));
    },
  
    beforeLeave: function() {
      var deferred = Barba.Utils.deferred();

      
      if(nameLast == 'box') {
          TweenMax.to($trgNext,.8,{xPercent:115, opacity: 0, ease: Power3.easeIn})      
          TweenMax.to($trgPrev,.8,{xPercent:-115, opacity: 0, ease: Power3.easeIn})      
          TweenMax.to('.box',2,{position:'absolute', left:'0', top:'0', width:'50vw', height:'100vh', ease: Power4.easeInOut, onComplete: function(){ deferred.resolve(); }}) //onComplete      
        }
      
      if(nameLast == 'photo') {      
          let tlOut = new TimelineMax()
          .to('.box-text',1.2,{ y:200, opacity:0, ease: Power3.easeInOut})
            .to('.photo',2,{left:midScreen, xPercent: -50, width:'60vw', height:'60vh', ease: Power4.easeInOut, onComplete: function(){ deferred.resolve(); }},.3) //onComplete      
        }
       


      return deferred.promise;
    },
  
    beforeEnter: function() {

        function goTrg() {
            TweenMax.fromTo($trgNext,.8,{xPercent:125, opacity: 0}, {xPercent:0, opacity: 1, ease: Power3.easeOut})     
            TweenMax.fromTo($trgPrev,.8,{xPercent:-125, opacity: 0},{xPercent:0, opacity: 1, ease: Power3.easeOut})     
        }
        if(nameLast == 'box') {
            TweenMax.from('.box-text',1.6,{y:200, opacity:0, ease: Power3.easeOut})
        }

        if(nameLastEnter == 'photo1') {     
            goTrg();
        }

        else if (nameLastEnter == 'photo2') {            
            
            TweenMax.set('.holder',{onComplete: goTrg ,x:- wScreen})    
        }

        else if (nameLastEnter == 'photo3') {            
            
            TweenMax.set('.holder',{onComplete: goTrg ,x:- wScreen*2})    
        }

        else if (nameLastEnter == 'photo4') {            
            
            TweenMax.set('.holder',{onComplete: goTrg ,x:- wScreen*3})    
        }

        else if (nameLastEnter == 'photo5') {            
            
            TweenMax.set('.holder',{onComplete: goTrg ,x:- wScreen*4})    
        }

        else if (nameLastEnter == 'photo6') {            
            
            TweenMax.set('.holder',{onComplete: goTrg ,x:- wScreen*5})    
        }
        
  
            
        this.done();
    }
  });
  
  Barba.Pjax.getTransition = function() {
    var transitionObj = ExpandTransition;
  
    //Barba.HistoryManager.prevStatus().namespace 
    return transitionObj;
  };

  
Barba.Pjax.start();