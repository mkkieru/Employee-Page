$(document).ready(function() {
    $("#member1").hover(function() {
        $("#div1").fadeToggle();

    });
    $("#member2").hover(function() {
        $("#div2").fadeToggle();

    });

    $("#member3").hover(function() {
        $("#div3").fadeToggle();

    });
    $("#member4").hover(function() {
        $("#div4").fadeToggle();

    });
    $("#member5").hover(function() {
        $("#div5").fadeToggle();

    });

    $("#member6").hover(function() {
        $("#div6").fadeToggle();

    });
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}