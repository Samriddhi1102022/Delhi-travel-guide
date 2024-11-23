let videoSlider = document.querySelector('.video-slider');
let videoSlides = document.querySelectorAll('.video-slide');
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');
let currentSlide = 0;
let slidesPerPage = 3;
let slideWidth = videoSlides[0].offsetWidth + 20; // Add gap

// Show initial slides
for (let i = 0; i < slidesPerPage; i++) {
  videoSlides[i].classList.add('active');
}

prevButton.addEventListener('click', () => {
  currentSlide -= slidesPerPage;
  if (currentSlide < 0) currentSlide = videoSlides.length - slidesPerPage;
  videoSlider.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
  updateActiveSlides();
});

nextButton.addEventListener('click', () => {
  currentSlide += slidesPerPage;
  if (currentSlide >= videoSlides.length) currentSlide = 0;
  videoSlider.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
  updateActiveSlides();
});

function updateActiveSlides() {
    videoSlides.forEach((slide) => slide.classList.remove('active'));
    for (let i = currentSlide; i < currentSlide + slidesPerPage; i++) {
      if (i < videoSlides.length) {
        videoSlides[i].classList.add('active');
      }
    }
  }
  
  
/* new */
// Function to show the box based on card clicked
function showBox(boxId) {
    document.getElementById(boxId).style.display = "block";
    document.getElementById("overlay").style.display = "block";
  }

  // Function to close the box
  function closeBox(boxId) {
    if (boxId) {
      document.getElementById(boxId).style.display = "none";
    }
    document.getElementById("overlay").style.display = "none";
  }
  function toggleModal() {
    const modal = document.getElementById('infoModal');
    modal.style.display = (modal.style.display === 'none' || modal.style.display === '') ? 'flex' : 'none';
  }

  // Close modal when clicking outside content area
  window.onclick = function (event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }
