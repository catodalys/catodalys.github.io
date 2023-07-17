// Add your JavaScript code here
document.addEventListener("DOMContentLoaded", function() {
  var slides = document.getElementsByClassName("slide");
  var slideIndex = 0;

  function showSlide() {
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlide, 3000); // Change slide every 3 seconds
  }

  showSlide();
});
