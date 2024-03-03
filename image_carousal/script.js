
var images = [
    './images/andrew-small-EfhCUc_fjrU-unsplash.jpg',
    './images/camille-minouflet-d7M5Xramf8g-unsplash.jpg',
    './images/luis-alberto-nKUlPRDqaBE-unsplash.jpg',
    './images/lukasz-szmigiel-jFCViYFYcus-unsplash.jpg',
    './images/ray-hennessy-xUUZcpQlqpM-unsplash.jpg'
    
  
  ];
  
  var currentImageIndex = 0; 
  
 
  function updateImage() {
    document.getElementById('carouselImg').src = images[currentImageIndex];
  }
  
 
  document.getElementById('next').addEventListener('click', function() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0; 
    }
    updateImage();
  });

  document.getElementById('prev').addEventListener('click', function() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1; 
    }
    updateImage();
  });
  
  
  updateImage();
  