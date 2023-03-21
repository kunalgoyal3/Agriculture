function slideshow() {
    var currentSlide = 0;
    var slides = document.querySelectorAll('.slideshow-container img');
  
    setInterval(function() {
      slides[currentSlide].style.display = 'none';
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.display = 'block';
    }, 3000);
  }
  
  window.onload = function() {
    slideshow();
  };
  