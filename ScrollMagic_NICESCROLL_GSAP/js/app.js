$(window).scroll(function(){
  var wTop = $(this).scrollTop();
  $('.bora').each(function(){
    if(wTop > $(this).offset().top - 400){
      $(this).addClass("anima");
    }
    else{
       $(this).removeClass("anima");
    }


});


});
//  <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>