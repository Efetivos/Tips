/* Incorporar Jquery & niceScroll.js

     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.0/jquery.nicescroll.min.js"></script> */


$(document).ready(function() {  
    $("html").niceScroll({
        zindex: "999",
        scrollspeed: 300,
        Mousescrollstep : 50,
        Smoothscroll : true 
    
    });
});