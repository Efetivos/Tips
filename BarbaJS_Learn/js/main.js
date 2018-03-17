var wScreen = $(window).width(),
    midScreen = wScreen /2,
    $holder = $('.holder'),
    count = 0;



/* var tlSlide = new TimelineMax({paused:true})
    .to('.holder',3,{x: - wScreen*1, ease: Power3.easeOut}).addPause()
    .to('.holder',3,{x: - wScreen*2, ease: Power3.easeOut}).addPause()
    .to('.holder',3,{x: - wScreen*3, ease: Power3.easeOut}).addPause()
    .to('.holder',3,{x: - wScreen*4, ease: Power3.easeOut}).add('label') */
$('.logo').click(function(){
    TweenMax.to('.holder',3,{x: '-='+wScreen*1, ease: Power3.easeOut})
    count ++;
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
          TweenMax.to('.box',2,{position:'absolute', left:'0', top:'0', width:'50vw', height:'100vh', ease: Power4.easeInOut, onComplete: function(){ deferred.resolve(); }}) //onComplete      
        }
      
      if(nameLast == 'photo') {      
          let tlOut = new TimelineMax()
          .to('.box-text',1.6,{ y:200, opacity:0, ease: Power3.easeInOut})
            .to('.photo',2,{left:midScreen, xPercent: -50, width:'60vw', height:'60vh', ease: Power4.easeInOut, onComplete: function(){ deferred.resolve(); }},.3) //onComplete      
        }
       


      return deferred.promise;
    },
  
    beforeEnter: function() {
        TweenMax.from('.box-text',1.6,{y:200, opacity:0, ease: Power3.easeOut})

        if(nameLastEnter == 'photo1') {            
            this.done(); 
        }

        else if (nameLastEnter == 'photo2') {            
            this.done();
            TweenMax.set('.holder',{x:- wScreen})    
        }

        else if (nameLastEnter == 'photo3') {            
            this.done();
            TweenMax.set('.holder',{x:- wScreen*2})    
        }

        else if (nameLastEnter == 'photo4') {            
            this.done();
            TweenMax.set('.holder',{x:- wScreen*3})    
        }

        else if (nameLastEnter == 'photo5') {            
            this.done();
            TweenMax.set('.holder',{x:- wScreen*4})    
        }

        else if (nameLastEnter == 'photo6') {            
            this.done();
            TweenMax.set('.holder',{x:- wScreen*5})    
        }
         console.log(count);
            
        this.done();
    }
  });
  
  Barba.Pjax.getTransition = function() {
    var transitionObj = ExpandTransition;
  
    //Barba.HistoryManager.prevStatus().namespace 
    return transitionObj;
  };

  
Barba.Pjax.start();