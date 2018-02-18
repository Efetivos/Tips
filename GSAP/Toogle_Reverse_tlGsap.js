var tl = new TimelineMax()
    .to(".menu", 0.5, {autoAlpha: 1, height:"100vh"})
    .reverse()
  ;   

$(".trigger").click(function() {
  tl.reversed(!tl.reversed());
});