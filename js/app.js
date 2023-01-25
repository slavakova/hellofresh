document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("burger").addEventListener("click", function(){
      document.querySelector("nav").classList.toggle("open"); 
   });
});



$('.slider').slick({
      infinite: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1
});