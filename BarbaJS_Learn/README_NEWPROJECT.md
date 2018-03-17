
## Learning BarbaJs
> Obs: Needed Styles on .scss

###	 Infos site
> <script src="https://cdnjs.cloudflare.com/ajax/libs/barba.js/1.0.0/barba.min.js"></script>


### Step 1:
> Insert on index.html
```bash
<div id="barba-wrapper">
  <div class="barba-container">
    ...Put here the content you wish to change between pages...
  </div>
</div>
```

### Step 2:
> Insert on JS
```bash
Barba.Pjax.start();
```

### Step 3:
> Insert on Componentes
```bash
<div id="barba-wrapper">
  <div class="barba-container">
    ...Put here the content you wish to change between pages...
  </div>
</div>
```

### Step 4 | Config Transition:
> Insert on JS
```bash
var ExpandTransition = Barba.BaseTransition.extend({
    start: function() {
      Promise
        .all([this.newContainerLoading, this.beforeLeave()]) //Call Function = BeforeLeave
        .then(this.beforeEnter.bind(this));
    },
  
    beforeLeave: function() {
      var deferred = Barba.Utils.deferred();
      // 
      TweenMax.to('body',2,{y:40 , onComplete: function(){ deferred.resolve(); }}) //onComplete deferred = Changing Page
      return deferred.promise;
    },
  
    beforeEnter: function() {
      this.done();
    }
  });
  
  Barba.Pjax.getTransition = function() {
    var transitionObj = ExpandTransition;
  
    //Barba.HistoryManager.prevStatus().namespace 
    return transitionObj;
  };

```

### Step 5 | Get last element Clicked
> Insert on Componentes
```bash
	var lastElementClicked;
	var nameLast;

	//Function to discover last element
	Barba.Dispatcher.on('linkClicked', function(el) {
		lastElementClicked = el,
		nameLast = lastElementClicked.className.split(' ')[0];
		console.log(nameLast);	
	});
		

	//TweenBeforeEnter
    beforeEnter: function() {
        TweenMax.from('.box-text',1,{delay:3, y:200, opacity:0})

        if(nameLast == '.element-clicked') {
        	this.done();
            TweenMax.set('.MyElement',{clearProps:"all"});          
        }
        this.done();
    }
    
```